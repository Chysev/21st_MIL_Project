import AOS from 'aos'
AOS.init()

// Components
import Directors from './components/Directors'
import VideoEditor from './components/VideoEditor'
import ScriptWriters from './components/ScriptWriters'
import Poster from './components/Poster'
import WebDev from './components/WebDev'
import DOP from './components/DOP'
import DP from './components/DP'
import Costumes_Props from './components/Costumes_Props'

const RoleList = () => {
    return (
        <div className="grid grid-cols-4 768max:grid-cols-2 768max:pb-[2rem] gap-[5rem]">

            {/* Director */}
            <Directors />

            {/* Video Editor */}
            <VideoEditor />

            {/* Script Writers */}
            <ScriptWriters />

            {/* Poster */}
            <Poster />

            {/* Website Developer */}
            <WebDev />

            {/* DOP */}
            <DOP />

            {/* DP  */}
            <DP />

            {/* Costumes & Props  */}
            <Costumes_Props />

        </div>
    )
}

export default RoleList