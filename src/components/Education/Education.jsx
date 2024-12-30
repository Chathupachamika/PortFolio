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
    <Timeline position="alternate">
      {/* School Life */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          January 2012 - December 2022
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            School Life
          </Typography>
          <Typography>
            Attended XYZ College, completing both GCE O/L and A/L exams in the Physical Science stream.
          </Typography>
          <Typography>Active participant in science and computer clubs.</Typography>
        </TimelineContent>
      </TimelineItem>

      {/* ICET Life */}
      <TimelineItem>
        <TimelineOppositeContent
          sx={{ m: 'auto 0' }}
          align="right"
          variant="body2"
          color="text.secondary"
        >
          February 2024 - December 2024
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot>
            <SchoolIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
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
          sx={{ m: 'auto 0' }}
          variant="body2"
          color="text.secondary"
        >
          2024 - Present
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineConnector />
          <TimelineDot color="primary">
            <CodeIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
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
          <TimelineConnector />
          <TimelineDot color="primary" variant="outlined">
            <SecurityIcon />
          </TimelineDot>
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
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
          <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
          <TimelineDot color="secondary">
            <GitHubIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
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
          <TimelineConnector />
          <TimelineDot color="primary">
            <MobileFriendlyIcon />
          </TimelineDot>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent sx={{ py: '12px', px: 2 }}>
          <Typography variant="h6" component="span">
            Mobile Application Development
          </Typography>
          <Typography>
            Leveraged Flutter’s widgets and tools to build responsive and dynamic user interfaces.
          </Typography>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  );
}

export default Education;
