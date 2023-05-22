import React, { useEffect } from 'react';
import { useState } from 'react';
import { List, ListItem, Typography, ListItemText, Divider, Avatar, ListItemAvatar } from '@mui/material';
import { useParams } from 'react-router-dom';
import { Button } from '@mui/material';
import { FormControl } from '@mui/material'; // Removed unused imports
import axios from 'axios';
import { _URL } from '../../url.js';

const AddLearnerToCourse = () => {
  let url = _URL + 'Learners';
  let { CourseID } = useParams();
  const LearnersArray = [];
  const [learners, setLearners] = useState([]);
  const [enrolled, setEnrolled] = useState([]);
  const [course, setCourse] = useState({});
  const [added, setAdded] = useState(false);

  // Removed unnecessary Learners function

  useEffect(() => {
    axios.get(url)
      .then(res => {
        const learners = res.data;
        setLearners(learners);
        console.log('learners', learners);
      })
      .catch(err => console.log(err));

    axios.get(_URL + 'Courses/' + CourseID)
      .then(res => {
        setEnrolled(res.data.learners);
        setCourse(res.data);
      })
      .catch(err => console.log(err));

    console.log('Learners...', learners);
    console.log('Enrolled...', enrolled);
  }, []);

  function same(learner, enrolled_learner) {
    if (learner.username === enrolled_learner.username) {
      return true;
    }
    return false;
  }

  // Moved the loop to useEffect to avoid issues with updating state inside the loop
  useEffect(() => {
    const updatedLearners = [...learners]; // Create a copy of the learners array

    for (let i = 0; i < updatedLearners.length; i++) {
      for (let j = 0; j < enrolled.length; j++) {
        if (same(updatedLearners[i], enrolled[j])) {
          updatedLearners.splice(i, 1);
          setLearners(updatedLearners);
        }
      }
    }
  }, [learners, enrolled]);

  const addLearner = async (learner) => {
    console.log(course);
    var l = learner;
    console.log('dfadafa', l);

    course.learners.push(l);
    setCourse(course);
    console.log(course);

    await axios.put(_URL + 'Courses/' + CourseID, course)
      .then(res => {
        console.log('putres', res);
      });

    const progress = {
      learner_id: learner._id,
      course_id: CourseID,
      progress_value: 0,
    };

    await axios.post(_URL + 'Progresses', progress)
      .then(res => {
        console.log('progresspost', res);
      });

    if (added === true) {
      setAdded(false);
    } else {
      setAdded(true);
    }
  };

  return (
    <>
      <FormControl className='form' style={{ marginLeft: '10%' }} id="myForm" name="myForm">
        <Typography variant='h5' style={{ textAlign: 'center', paddingTop: '2%', paddingBottom: '2%' }}> Unregistered Learners </Typography>
        <List>
          {learners.map(learner => (
            <React.Fragment key={learner.username}>
              <ListItem>
                <ListItemAvatar>
                  <Avatar alt={learner.name} src="/static/images/avatar/1.jpg" />
                </ListItemAvatar>
                <ListItemText>
                  <Typography>{learner.name} ({learner.username})</Typography>
                </ListItemText>
                <Button onClick={() => addLearner(learner)} variant="outlined">Enroll</Button>
              </ListItem>
              <Divider></Divider>
            </React.Fragment>
          ))}
        </List>
      </FormControl>
    </>
  );
};

export default AddLearnerToCourse;
