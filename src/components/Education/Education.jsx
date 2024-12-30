import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import SchoolIcon from '@mui/icons-material/School';
import CodeIcon from '@mui/icons-material/Code';
import SecurityIcon from '@mui/icons-material/Security';
import GitHubIcon from '@mui/icons-material/GitHub';
import MobileFriendlyIcon from '@mui/icons-material/MobileFriendly';
import Typography from '@mui/material/Typography';

function Education() {
  return (
    <div className="text-white mb-36 flex flex-col items-center justify-center p-40" id="education">
      {/* Neon Header */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-black">
  <h1
    className="text-5xl font-semibold mb-32"
    style={{
      color: '#39ff14', 
      textAlign: 'center', 
      textShadow: '0 0 10px #39ff14, 0 0 20px #39ff14, 0 0 30px #32cd32', 
      fontFamily: 'Cinzel, serif', 
    }}
  >
    EDUCATION
  </h1>
</div>

    <Timeline position="alternate">
      {/* School Life */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', color: 'white',fontFamily: 'Courier New, monospace' }}
          align="right"
          variant="body2"
        >
          January 2012 - December 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'black' }} />
          <TimelineDot>
            <SchoolIcon style={{ color: 'blue' }} />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'gray' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: 'white', fontFamily: 'Verdana, sans-serif' }}>
          <Typography variant="h6" component="span">
            School Life
          </Typography>
          <Typography>
            Attended G/P.De S.Kularathne College, completing both GCE O/L and A/L exams in the Physical Science stream.
          </Typography>
          <Typography>Active participant in science and computer clubs.</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* ICET Life */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', color: 'white', fontFamily: 'Courier New, monospace' }}
          align="right"
          variant="body2"
        >
          February 2024 - December 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'gray' }} />
          <TimelineDot>
            <SchoolIcon style={{ color: 'green' }} />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'gray' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: 'white', fontFamily: 'Verdana, sans-serif' }}>
          <Typography variant="h6" component="span">
            iCET Certified Developer (ICD)
          </Typography>
          <Typography>
            Institute of Computer Engineering Technology, Panadura - Diploma
          </Typography>
          <Typography>Focused on software engineering and programming.</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Full Stack Developer */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0', color: 'white', fontFamily: 'Courier New, monospace' }}
          variant="body2"
        >
          2024 February - 2024 November
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'gray' }} />
          <TimelineDot color="primary">
            <CodeIcon style={{ color: 'white' }} />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'gray' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: 'white', fontFamily: 'Calibri, sans-serif' }}>
          <Typography variant="h6" component="span">
            Full Stack Developer - Trainee
          </Typography>
          <Typography>
            Developed dynamic web applications using Angular, Spring Boot, and SQL for various clients.
          </Typography>
          <Typography>
            Integrated RESTful APIs for real-time database management with Spring Boot, JPA, and Hibernate.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Web Security */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'gray' }} />
          <TimelineDot color="primary" variant="outlined">
            <SecurityIcon style={{ color: 'white' }} />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'gray' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: 'white', fontFamily: 'Tahoma, sans-serif' }}>
          <Typography variant="h6" component="span">
            Web Security
          </Typography>
          <Typography>
            Implemented Spring Security for robust authentication and authorization, ensuring secure access control.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Deployment */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'gray' }} />
          <TimelineDot color="secondary">
            <GitHubIcon style={{ color: 'white' }} />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'gray' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: 'white', fontFamily: 'Lucida Console, monospace' }}>
          <Typography variant="h6" component="span">
            Deployment
          </Typography>
          <Typography>
            Streamlined deployment pipelines using Git for version control and CI/CD practices for continuous integration and delivery.
          </Typography>
        </TimelineContent>
      </TimelineItem>

      {/* Mobile Application Development */}
      <TimelineItem>
        <TimelineSeparator>
          <TimelineConnector sx={{ bgcolor: 'gray' }} />
          <TimelineDot color="primary">
            <MobileFriendlyIcon style={{ color: 'white' }} />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'gray' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2, color: 'white', fontFamily: 'Impact, sans-serif' }}>
          <Typography variant="h6" component="span">
            Mobile Application Development
          </Typography>
          <Typography>
            Leveraged Flutter’s widgets and tools to build responsive and dynamic user interfaces.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
    </div>
  );
}

export default Education;
