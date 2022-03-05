import type { NextPage } from 'next'

const style = {
  wrapper: `flex justify-center h-screen w-screen select-none bg-[#15202b] text-white`,
  content: `maz-w-[1400px] w-2/3 flex justify-between`,
}

const Home: NextPage = () => {
  return (
    <div className={style.wrapper}>
      <div className={style.content}>
        <h2>Sidebar</h2>
        <h2>Feed</h2>
        <h2>Widgets</h2>
      </div>
    </div>
  )
}

export default Home
