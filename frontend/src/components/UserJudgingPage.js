import React, {useState} from 'react'
import NavBar from './NavBar'
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ThumbDownIcon from '@material-ui/icons/ThumbDown';
import Button from '@material-ui/core/Button';

const UserJudgingPage = () => {
    const [countUp, setCountUp] = useState(0)
    const [countDown, setCountDown] = useState(0)


  return (
    <div>
        <NavBar/>
        <Button onClick={() => setCountUp(countUp + 1)}><ThumbUpIcon />{`${countUp === 0 ? ' ' : countUp}`}</Button>
        <Button onClick={() => setCountDown(countDown + 1)}><ThumbDownIcon />{`${countDown === 0 ? ' ' : countDown}`}</Button>
    </div>
  )
}
export default UserJudgingPage
