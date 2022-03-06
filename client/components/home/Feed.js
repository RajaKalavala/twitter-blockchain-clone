import { BsStars } from 'react-icons/bs'
import TweetBox from '../home/TweenBox'
import Post from '../../components/Post'

const style = {
  wrapper: `flex-[2] border-r border-l border-[#38444d]`,
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
function Feed() {
  return (
    <div className={style.wrapper}>
      <div className={style.header}>
        <div className={style.headerTitle}>Home</div>
        <BsStars />
      </div>
      <TweetBox />
      {tweets.map((tweet, index) => (
        <Post />
      ))}
    </div>
  )
}

export default Feed
