import {ChtPrvdr} from './Context/ChtPrvdr'
import Pop from './Packet/PopUp/Pop';
import Group from './Pages/Group'
function App() {
  return (
      <ChtPrvdr>
        <Group/>
        <Pop/>
      </ChtPrvdr>
  );
}

export default App;
