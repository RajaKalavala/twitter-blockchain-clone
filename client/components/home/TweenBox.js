import { useState } from 'react'

const style = {
  wrapper: `px-4 flex flex-row border-b border-[#38444d] pb-4`,
  tweetBoxLeft: `mr-4`,
  tweetBoxRight: `flex-1`,
  profileImage: `height-12 w-12 rounded-full`,
  inputField: `w-full h-full outline-none bg-transparent text-lg`,
  formLowerContainer: `flex`,
  iconsContainer: `text-[#1d9bf0] flex flex-1 items-center`,
  icon: `mr-2`,
  submitGeneral: `px-6 py-2 rounded-3xl font-bold`,
  inactiveSubmit: `bg-[#196195] text-[#95999e]`,
  activeSubmit: `bg-[#1d9bf0] text-white`,
}

function TweetBox() {
  const [tweetMessage, setTweetMessage] = useState('')

  const postTweet = (event) => {
    event.preventDefault()
    console.log(tweetMessage)
  }

  return (
    <div className={style.wrapper}>
      <div className={style.tweetBoxLeft}>
        <img
          src="https://media-exp1.licdn.com/dms/image/C5603AQG0CeEcQRy1ng/profile-displayphoto-shrink_200_200/0/1613901896297?e=1647475200&v=beta&t=vtTHn0F2IShhLXvON_ErObm2DiSIrSYgGCyALGASHis"
          alt="profile image"
          className={style.profileImage}
        ></img>
      </div>
      <div className={style.tweetBoxRight}>
        <form>
          <textarea
            className={style.inputField}
            placeholder="What's happening"
            value={tweetMessage}
            onChange={(e) => setTweetMessage(e.target.value)}
          ></textarea>
          <div className={style.formLowerContainer}>
            <div className={style.iconsContainer}></div>
            <button
              type="submit"
              disabled={!tweetMessage}
              onClick={(event) => postTweet(event)}
              className={`${style.submitGeneral} ${
                tweetMessage ? style.activeSubmit : style.inactiveSubmit
              }`}
            >
              Tweet
            </button>
          </div>
        </form>
      </div>
      <h2>TweetBox</h2>
    </div>
  )
}

export default TweetBox
