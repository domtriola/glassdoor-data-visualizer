const querySchema = new mongoose.Schema({
  query: String,
  count: Number,
  createdAt: { type: Date, default: Date.now }
});

const Query = mongoose.model('Query', querySchema);

module.exports = Query;
