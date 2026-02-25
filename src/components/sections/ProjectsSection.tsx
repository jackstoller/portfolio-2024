import { ImageCarouselClientComponent } from '../display/ImageCarousel.client';
import { P } from '../display/P';
import { Project } from '../display/Project';
import { Section } from '../display/Section';
import { A } from '../input/A';
import { Chip } from '../input/Chip';

export const ProjectsSection = () => {
  return (
    <Section title='Projects' id='projects'>
      <Project
        title='Secure Peer-to-Peer Messaging Using Distributed Servers'
        date='In Progress'
        skills={['Distributed Compute', 'Decentralized', 'Go', 'WebRTC', 'Peer-to-Peer']}
      >
          This is my senior design project for my bachelor's degree and is currently
          on going with the expected completion in Spring of 2026.
          <br />
          <strong>Abstract</strong>
          <P>
            This project designs, implements and demonstrates a secure, highly available peer-to-peer
            messaging system. Peer to peer communications leverage WebRTC for end-to-end encrypted
            communication channels. It is supported by a distributed mesh of servers for peer discovery and
            for WebRTC channels with TURN relays. The system will be decentralized, making it more
            resistant to targeted availability attacks. Peer to peer connections will be used to minimize extra
            metadata that could be used in a metadata attack. Security phrases will be displayed so users can
            validate the security of their communication channel. This project aims to demonstrate the
            practicality of using a decentralized model for secure communications.

            <br /><br />
            View the GitHub repo at <A to='https://github.com/jackstoller/p2p-messaging'>github.com/jackstoller/p2p-messaging</A>
            &nbsp;and view the project proposal <A to='/resources/CISSeniorProject-ProjectProposal-JackStoller.pdf'>here</A>
          </P>
      </Project>

      <Project
        title='Cloudflare AI Summarization'
        date='Winter 2026'
        skills={['AI', 'Docker', 'Supabase', 'HTML', 'CSS', 'JavaScript']}
      >
          <P class='mb-4'>
            The goal with this project was to be able to upload large amounts
            of data, including very large PDF documents. It's then scanned and
            analyzed so that an AI agent can quickly scan and find answers. The
            agent is designed to cite the specific source making it much easier
            to quickly verify the accuracy of every statement. It includes a
            fully custom AI agent runtime, allowing any model to be used for function
            calling. It also support reasoning and direct citations. Future plans
            include allowing the agent to spin off subtasks and create it's own
            documents.

            <br /><br />
            Try it for yourself at <A to='https://summerize.jackstoller.com'>summerize.jackstoller.com</A>
          </P>

        <ImageCarouselClientComponent
          images={[
            '/images/projects/summarizer-01.png',
            '/images/projects/summarizer-02.png',
            '/images/projects/summarizer-03.png',
            '/images/projects/summarizer-04.png',
          ]}
        />
      </Project>

      <Project
        title='Thryve'
        date='Fall 2025'
        skills={['AI', 'Docker', 'Supabase', 'HTML', 'CSS', 'JavaScript']}
      >
        <div class='flex gap-8'>
          <P>
            This was project to help me manage my many plants with reminders of
            when they needed to watered and fertilized. It wasn't practical for
            me to come up with my own image recognition software and full
            database of plant care instructions. Instead I used three AI models
            which all draw their own independent data and a fourth determines if
            there is a consensus. The multistage verification has yielded fairly
            accurate results overall without significant development on my end. 
            Ran on the Supabase stack in a cloud vm with docker.

            <br /><br />
            Try it for yourself at <A to='https://thryve.jackstoller.com'>thryve.jackstoller.com</A>
          </P>

          <img
            src='/images/projects/thryve-05.png'
            alt='ClickHouse Logo'
            width='180'
            height='156'
            class='hidden sm:block flex-none m-8'
          />
        </div>

        <ImageCarouselClientComponent
          images={[
            '/images/projects/thryve-01.png',
            '/images/projects/thryve-02.png',
            '/images/projects/thryve-03.png',
            '/images/projects/thryve-04.png',
          ]}
        />
      </Project>

      <Project
        title='Food Roulette'
        date='Fall 2025'
        skills={['JavaScript', 'Docker', 'Web APIs', 'HTML']}
      >
        <P class='mb-4'>
          This small project allows users to randomly choose a restaurant
          that meets their criteria. They enter their location, preferences
          and press role. The website uses Google Map's Places API to find
          locations that match. The application was fully contained within
          docker.

          <br /><br />
          View the GitHub repo at <A to='http://github.com/jackstoller/food-roulette'>github.com/jackstoller/food-roulette</A>
        </P>

        <ImageCarouselClientComponent
          images={[
            '/images/projects/food-roulette-01.png',
            '/images/projects/food-roulette-02.png',
            '/images/projects/food-roulette-03.png',
          ]}
        />
      </Project>

          
      <Project
        title='Vigil'
        date='Spring 2025'
        skills={['Kotlin', 'Android', 'Security']}
      >
        <div class='flex gap-8'>
          <P>
            This project explores what data could be captured by a malicious
            app with just the accessibility permissions on the latest
            version of Android. It was designed and developed for a programming
            cybersecurity course as an honors' project. During the course of the
            project, I was able to successfully demonstrate how an attacker could
            use it as a keylogger, spyware or many other sorts of surveillance
            software if given permission. This project highlights the importance
            of security through strict permission control.

            <br /><br />
            During the project, I gain more knowledge about the Android operating
            system handles applications, permissions and activities. Through this
            project I was able to learn more about how to develop native mobile
            applications.

            <br /><br />
            View the GitHub repo at <A to='https://github.com/jackstoller/vigil'>github.com/jackstoller/vigil</A>
          </P>
          <img
            src='/images/projects/vigil-01.png'
            alt='ClickHouse Logo'
            width='160'
            height='357'
            class='hidden sm:block flex-none m-8 opacity-75'
          />
        </div>
      </Project>


      <Project
        title='Map Utilities'
        date='Summer 2024'
        skills={['Go', 'Web Scraping', 'goroutines', 'Google Maps API']}
      >
        <P class='mb-4'>
          This is a suite of map generation tools in Go. They create maps from a
          variety of sources such as Google Maps. It works by fetching the
          individual tiles in parallel, caching them locally before stitching
          them together. With these tools I was able to generate many extremely
          detailed maps. So large in fact, most high-end systems couldn't even
          open them due to memory constraints and had to be downsized. These
          maps were then used with a CO2 laser to produce detailed, intricate
          physical copies.
        </P>

        <ImageCarouselClientComponent
          images={[
            '/images/projects/map-utilities-01.webp',
            '/images/projects/map-utilities-02.webp',
            '/images/projects/map-utilities-03.webp',
            '/images/projects/map-utilities-04.webp',
          ]}
        />
      </Project>

      <Project
        title='ClickHouse Data Analysis'
        date='Winter 2024'
        skills={[
          'Go',
          'Postgres',
          'ClickHouse',
          'Oracle Cloud',
          'goroutines',
          'Grafana',
        ]}
      >
        <div class='flex gap-8'>
          <img
            src='/images/projects/clickhouse-logo.svg'
            alt='ClickHouse Logo'
            width='180'
            height='156'
            class='hidden sm:block flex-none m-8 opacity-75'
          />
          <P>
            This project initially started as a traditional Postgres database,
            but moved to ClickHouse to leverage its column-based database
            solution to store and analyze billions of records. The records were
            pulled from a public API using a Go worker and then inserted into
            ClickHouse in batches. The worker was designed to be able to scale
            both vertically and horizontally. It featured multi-phase data
            deduplication and batched database updates. The data was analyzed
            using optimized ClickHouse queries and visualized with Grafana. With
            ClickHouse, queries that took over 10 minutes on the Postgres
            database would run in just a few seconds. The project was hosted on
            Oracle Cloud and on ClickHouse, however because of the ongoing cost,
            the project is no longer running.
          </P>
        </div>
      </Project>

      <Project
        title='SwimXO'
        date='Spring 2022'
        skills={[
          'Firebase',
          'ReactJS',
          'Websockets',
          'HTML',
          'CSS',
          'JavaScript',
        ]}
      >
        <div class='flex gap-4 mb-4'>
          <p class='flex-1 text-forest-800 leading-5 indent-6 text-justify'>
            SwimXO is a management system used by swim instructors. It assists
            swimming instructors by tracking student progress, schedules,
            courses, and payments. The front end is a responsive web app written
            in ReactJS. It uses Firebase as a backend for authentication and
            data storage. Websockets are used to provide real-time updates to
            the interface as changes are made. The code for this project is
            available on <A to='https://github.com/Jack-Stoller/swimxo'>GitHub</A>.
          </p>
          <img
            src='/images/projects/swimxo-logo.svg'
            alt='ClickHouse Data Analysis'
            width='180'
            height='150'
            class='hidden sm:block flex-none mx-8'
          />
        </div>

        <ImageCarouselClientComponent
          images={[
            '/images/projects/swimxo-01.webp',
            '/images/projects/swimxo-02.webp',
          ]}
        />
      </Project>

      <Project
        title='Encryption Report'
        date='Spring 2022'
        skills={['Three.js', 'Web Components', 'HTML', 'CSS', 'JavaScript']}
      >
        <P class='mb-4'>
          An interactive and visual report that examines the evolution of U.S.
          government regulation on data security, encryption and user privacy.
          It was originally created as a capstone project in one of my
          undergraduate courses. It uses Three.js to show interactive 3D models.
          The code for this project is available on <A to='https://github.com/jackstoller/comp-encryption'>GitHub</A>. A live
          version of the report can be viewed <A to='https://projects.jackstoller.com/compencryption/'>here</A>.
        </P>

        <ImageCarouselClientComponent
          images={[
            '/images/projects/encryption-01.webp',
            '/images/projects/encryption-02.webp',
            '/images/projects/encryption-03.webp',
            '/images/projects/encryption-04.webp',
          ]}
        />
      </Project>

      <A to='https://github.com/jackstoller?tab=repositories'>
        View More Projects on GitHub
      </A>
    </Section>
  );
};
