const express = require("express");
const cors = require("cors");
const { default: axios } = require("axios");

const app = express();
app.use(express.json());
app.use(cors({ origin: true }));

app.post("/authenticate", async (req, res) => {
  const { username } = req.body;

  try {
    const r = await axios.put(
      "https://api.chatengine.io/users/",
      {
        username: username,
        secret: username,
        first_name: username,
      },
      {
        headers: {
          "private-key": "3909b81e-9640-4879-84b8-fd8f4cae924e",
        },
      }
    );

    return res.status(r.status).json(r.data);
  } catch (e) {
    return res.status(e.response.status).json(e.response.data);
  }
});

app.listen(process.env.PORT || 3001);

// product id   daa935b6-1245-44aa-af4c-c7cdf301f8fd

// private key  3909b81e-9640-4879-84b8-fd8f4cae924e
