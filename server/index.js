const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config();
const port = process.env.PORT || 3001;
const jwt = require("jsonwebtoken");

// all middleware
app.use(cors());
app.use(express.json());

// MongoDb Code Start

const uri = `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.to58y.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );

    // jobs related apis
    const jobCollection = client.db("JobPortalRecap").collection("jobsRecap");
    const jobApplication = client
      .db("JobPortalRecap")
      .collection("jobApplication");

    // Auth Related APIS
    app.post(`/jwt`, async (req, res) => {
      const user = req.body;
      const token = jwt.sign(user, "secret", { expiresIn: "1h" });
      res.send(token);
    });

    // jobs related apis
    app.get("/jobs", async (req, res) => {
      const email = req.query.email;
      let query = {};
      if (email) {
        query = { hr_email: email };
      }

      const cursor = jobCollection.find(query);
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/jobs/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await jobCollection.findOne(query);
      res.send(result);
    });

    // Create Job
    app.post("/jobs", async (req, res) => {
      const newJob = req.body;
      const result = await jobCollection.insertOne(newJob);
      res.send(result);
    });

    // job application apis
    // get all data, get one data, get some data[0, 1 , many]

    app.get("/job-application", async (req, res) => {
      const email = req.query.email;
      const query = { applicant_email: email };
      const result = await jobApplication.find(query).toArray();
      // bot way to aggregate data
      for (const application of result) {
        // console.log(application.job_id);
        const query1 = { _id: new ObjectId(application.job_id) };
        const job = await jobCollection.findOne(query1);
        if (job) {
          application.title = job.title;
          application.company = job.company;
          application.company_logo = job.company_logo;
          application.location = job.location;
        }
      }
      res.send(result);
    });

    app.post("/jobApplication", async (req, res) => {
      const application = req.body;
      const result = await jobApplication.insertOne(application);
      // not the best way (use aggregate)
      // skip --> it
      const id = application.job_id;
      const query = { _id: new ObjectId(id) };
      const job = await jobCollection.findOne(query);

      let newCount = 0;
      if (job.applicationCount) {
        count = job.applicationCount + 1;
      } else {
        newCount = 1;
      }

      // new update the job info
      const filter = { _id: new ObjectId(id) };
      const updatedDoc = {
        $set: {
          applicationCount: newCount,
        },
      };
      const updateResult = await jobCollection.updateOne(filter, updatedDoc);
      res.send(result);
    });
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// MongoDb Code End

app.get("/", (req, res) => {
  res.json("Job is calling");
});

app.listen(port, () => {
  console.log(`Server started on port`);
});
