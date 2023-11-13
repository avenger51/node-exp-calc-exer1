function calculateMean(nums) {
    const sum = nums.reduce((acc, val) => acc + val, 0);
    return sum / nums.length;
  }

  function calculateMedian(nums) {
    nums.sort((a, b) => a - b);
    const mid = Math.floor(nums.length / 2);
    return nums.length % 2 !== 0 ? nums[mid] : (nums[mid - 1] + nums[mid]) / 2;
  }

  function calculateMode(nums) {
    const freq = {};
    let maxFreq = 0;
    let mode = nums[0];
    for (const num of nums) {
      freq[num] = (freq[num] || 0) + 1;
      if (freq[num] > maxFreq) {
        maxFreq = freq[num];
        mode = num;
      }
    }
    return mode;
  }

  function parseAndValidateNums(req, res, next) {
    if (!req.query.nums) {
      return res.status(400).json({ error: "nums are required" });
    }
    const nums = req.query.nums.split(',').map(n => {
      const num = parseFloat(n);
      if (isNaN(num)) {
        return res.status(400).json({ error: `Invalid number: ${n}` });
      }
      return num;
    });
    req.nums = nums;
    next();
  }

  module.exports = { calculateMean, calculateMedian, calculateMode, parseAndValidateNums };