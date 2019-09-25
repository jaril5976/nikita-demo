import React from 'react';
import axios from 'axios'

class App extends React.Component {
  state = {
    loading: false,
    contacts : []
  }

  componentDidMount = async () => {
    await this.callZohoAPI()
  }

  callZohoAPI = async() => {
    this.setState({loading: true})
    const responseData = await axios.get(`${'https://cors-anywhere.herokuapp.com/'}https://books.zoho.com/api/v3/contacts?organization_id=649249007`, { 
      crossdomain:true,
      headers: { 
        'Authorization': `Zoho-authtoken db36e02a50b57e081efe533a8a0f834b`,
      } 
    })
    this.setState({contacts: responseData.data.contacts,loading: false})
  }

  render() {
    console.log('this is contact data :->', this.state.contacts)
    const { loading, contacts } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <h1>Demo for miss Nikita Ajwani</h1>
          {loading && <h2>Loading</h2>}
        </header>
        <body>
          {!loading && contacts.length > 0 &&
          <table border="1">
             <tr>
               <th>Contact Name</th>
               <th>Company Name</th>
               <th>Email</th>
               <th>Phone</th>
               <th>GST Treatment</th>
             </tr>
             <tbody>
             {contacts.map((o, i) => (
               <tr key={i}>
                 <td>{o.contact_name}</td>
                 <td>{o.company_name}</td>
                 <td>{o.email}</td>
                 <td>{o.mobile}</td>
                 <td>{o.gst_treatment}</td>
               </tr>
             ))}
             </tbody>
          </table>
          }
        </body>
      </div>
    );
  }
}

export default App;
