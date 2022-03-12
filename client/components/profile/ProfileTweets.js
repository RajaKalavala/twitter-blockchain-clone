import React, { useContext } from 'react'
import { TwitterContext } from '../../context/TwitterContext'
import Post from '../Post'

const style = {
  wrapper: `no-scrollbar`,
  header: `sticky top-0 bg-[#15202b] z-10 p-4 flex justify-between items-center`,
  headerTitle: `text-xl font-bold`,
}

const tweets = [
  {
    displayName: 'Raja',
    userName: 'abcdefghijklmanopqrstuvwxyz',
    avatar:
      'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00:000Z',
  },
  {
    displayName: 'Raja',
    userName: 'abcdefghijklmanopqrstuvwxyz',
    avatar:
      'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00:000Z',
  },
  {
    displayName: 'Raja',
    userName: 'abcdefghijklmanopqrstuvwxyz',
    avatar:
      'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00:000Z',
  },
  {
    displayName: 'Raja',
    userName: 'abcdefghijklmanopqrstuvwxyz',
    avatar:
      'https://static.toiimg.com/thumb/resizemode-4,msid-76729750,imgsize-249247,width-720/76729750.jpg',
    text: 'gm',
    isProfileImageNft: false,
    timestamp: '2020-06-01T12:00:00:000Z',
  },
]

const ProfileTweets = () => {
  const { currentAccount, currentUser } = useContext(TwitterContext)
  return (
    <div className={style.wrapper}>
      {currentUser.tweets?.map((tweet, index) => (
        <Post
          key={index}
          displayName={
            currentUser.name === 'Unnamed'
              ? currentUser.walletAddress
              : currentUser.name
          }
          userName={`${currentAccount.slice(0, 4)}...${currentAccount.slice(
            -4
          )}`}
          text={tweet.text}
          avatar={currentUser.profileImage}
          isProfileImageNft={tweet.isProfileImageNft}
          timestamp={tweet.timestamp}
        />
      ))}
    </div>
  )
}

export default ProfileTweets
