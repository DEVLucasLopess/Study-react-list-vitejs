import './styles.css'
import { useState, useEffect } from 'react'
// useState é um Hooks que permite a criação de um stado
import { Card } from '../../components/Card';

export function Home() {
  const [studentName, setStudentName] = useState('');
  //studentName é a variavel que recebe o valor, e o setStudentName é a função. //useState
  const [students, setStudents] = useState([]);
  const [user, setUser] = useState({ name: '', avatar: ''});

  function handleAddStudent() {
    const newStudent = {
      name: studentName,
      time: new Date().toLocaleTimeString("pt-br", {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
      })
    };
    setStudents(prevState => [...prevState, newStudent]);
  }

  //entendendo melhor a funcionalidade o useEffect .. consultando a API do github
  useEffect(() => {
    //Não usando async
    // fetch('https://api.github.com/users/DEVLucasLopess')
    // .then(response =>response.json())
    // .then(data => {
    //   setUser({
    //     name: data.login,
    //     avatar: data.avatar_url,
    //   })
    // })

    //usando o async
    async function fetchData() {
    const response = await fetch('https://api.github.com/users/DEVLucasLopess')
    const data = await response.json();
    setUser({
        name: data.login,
        avatar: data.avatar_url,
      })
    }

    fetchData();
  }, []);

 return (
    <div className="container">
      <header>
        <h1>Listinha de nomes para entender melhor o funcionamento do React!</h1>
        {/* <h2>Nome: {studentName} </h2> */}
        <div>
          <strong>{user.name}</strong>
          <img src={user.avatar} alt="Foto de perfil" />
        </div>
      </header>
      <input type="text" placeholder="digite o nome" onChange={ e =>  setStudentName(e.target.value)} />
      {/* "onChange" toda vez que o conteudo do input muda, ele entrega o evento com um "=>" você pega o valor atual do input ... e vc ta passando tudo isso pra função setStudentName*/}

      <button type="button" onClick={handleAddStudent} >Adicionar</button>
      {/* <Card /> componetisação  */}

      {
        students.map(student => <Card key={student.time} name={student.name} time={student.time}/>)
      }

    </div> 
  )
}