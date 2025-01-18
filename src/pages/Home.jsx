import React, { useState } from 'react';

import PatientList from '../components/PatientList';
import AddPatient from '../components/AddPatient';
import { hastaData, doctorData } from '../helper/Data';

const Home = () => {
  let [doctors, setDoctors] = useState(doctorData);
  const [hastalar, setHastalar] = useState(hastaData);

  const [magic, setMagic] = useState(true);

  const doctorClick = (dId) => {
    doctors = doctors.filter((a) => a.id === dId);

    setDoctors(doctors);

    setMagic(false);

    setHastalar(hastalar.filter((a) => a.myDoctor === doctors[0].doctorName));
  };

  return (
    <div style={{ display: magic ? 'block' : 'flex' }}>
      <div>
        <header>
          <h1>HOSPITAL</h1>
          <div className="dr">
            {doctors.map((dr) => (
              <div>
                <img
                  src={dr.doctorImg}
                  width="210px"
                  height="200px"
                  className="doctorBtn"
                  alt=""
                  style={{ background: magic ? 'aqua' : 'lightgreen' }}
                  onClick={() => doctorClick(dr.id)}
                />
                <h4
                  style={{
                    background: magic ? 'aqua' : 'lightgreen',
                    borderLeft: `10px solid ${magic ? 'blue' : 'green'} `,
                  }}
                >
                  {dr.doctorName}
                </h4>
              </div>
            ))}
          </div>
        </header>

        {!magic && (
          <AddPatient
            hastalar={hastalar}
            setHastalar={setHastalar}
            doctors={doctors}
          />
        )}
      </div>

      <PatientList hastalar={hastalar} setHastalar={setHastalar} />
    </div>
  );
};

export default Home;
