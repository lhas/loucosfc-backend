const tweetIsValid = (event) => {
  if (event && event.text && event.retweeted_status && event.retweeted_status.retweet_count > 1) {
    return event;
  }

  return false;
};

module.exports = tweetIsValid;
