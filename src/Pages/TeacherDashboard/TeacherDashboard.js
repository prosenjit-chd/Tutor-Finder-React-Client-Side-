import React from 'react';
import AddNewTeacher from '../AddNewTeacher/AddNewTeacher';
import NewTeacherStatus from '../NewTeacherStatus/NewTeacherStatus';
import TeacherHome from '../TeacherHome/TeacherHome';



const TeacherDashboard = () => {
    return (
        <div>
           
           
      <TeacherHome/>
      <AddNewTeacher/>
      <NewTeacherStatus/>
        

        </div>
    );
};

export default TeacherDashboard;