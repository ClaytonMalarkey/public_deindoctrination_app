const Reward = require("../models/Reward");
const User = require("../models/User");

exports.getRewards = async (req, res) => {
  try {
    const rewards = await Reward.find();
    res.json(rewards);
  } catch (error) {
    res.status(500).json({ message: "Error fetching rewards" });
  }
};

exports.redeemReward = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    const reward = await Reward.findById(req.params.id);

    if (user.points >= reward.cost) {
      user.points -= reward.cost;
      await user.save();
      res.json({ message: "Reward redeemed successfully!" });
    } else {
      res.status(400).json({ message: "Not enough points!" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error redeeming reward" });
  }
};
