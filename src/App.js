import React from 'react';
import axios from 'axios';
import Header from './Header';
import FeatureCard from './CardFeatured';
import Card from './Card';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      students: null,
      featuredStudent: null
    }
  }

  componentDidMount() {
    axios.all([
      axios.get('https://codycollicott.github.io/yearbook/Data/students.json'),
      axios.get('https://codycollicott.github.io/yearbook/Data/featuredStudent.json')
    ])
    .then(response => {
      console.log(response);
      const students = response[0].data;
      const featuredStudent = response[1].data;
      
      this.setState({
        ...this.state,
        students,
        featuredStudent
      })
      
    })
    .catch(error => {
      console.log("an error occured")
      console.log(error);
    })
  }

  render() {
    const { students, featuredStudent } = this.state;
    return (
      <div className="App bg">
        <Header />
        <div className="wrap">
          {featuredStudent && (
            <FeatureCard 
              title={featuredStudent.title}
              field_class={featuredStudent.field_class}
              field_quote={featuredStudent.field_quote}
              field_picture={featuredStudent.field_picture}
            />
          )}
          <div className="flex cardWrap jus-between wrap">
            {students && students.map(student => (
              <Card 
                title={student.title}
                field_class={student.field_class}
                field_quote={student.field_quote}
                field_picture={student.field_picture}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default App;
