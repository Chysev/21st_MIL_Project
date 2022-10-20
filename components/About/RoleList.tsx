import AOS from 'aos'
AOS.init()

// Components
import Directors from './components/Directors'
import VideoEditor from './components/VideoEditor'
import ScriptWriters from './components/ScriptWriters'
import Poster from './components/Poster'
import WebDev from './components/WebDev'
import Cinematics from './components/Cinematics'
import Costumes_Props from './components/Costumes_Props'

const RoleList = () => {
    return (
        <div className="grid grid-cols-4 768max:grid-cols-2 768max:pb-[2rem] gap-[4rem]">

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

            {/* Cinematics  */}
            <Cinematics />

            {/* Costumes & Props  */}
            <Costumes_Props />

        </div>
    )
}

export default RoleList