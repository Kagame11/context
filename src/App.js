import Heading from './Heading.js';
import Section from './Section.js';

export default function ProfilePage() {
  return (
    <Section>
      <Heading>My Profile</Heading>
      <post 
      title="Hello traveller!"
      body="Read about my adventures."
      />
      <AllPosts />
      </Section>


        );
}

function AllPosts(){
  return (
    <section>
      <Heading>Posts</Heading>
      <RecentPosts/>
    </section>
  );
}

function RecentPosts(){
  return (
    <Section>
      <Heading>Recent Posts</Heading>
      <Post
      title="Flavors of Lisbon"
      body="...those pasteis de nata!"
      />
      <Post
      title="Buenos aires in the rythm of the tango"
      body="I loved it!"
      />
    </Section>
  );
}

function Post({title, body}) {
  return (
    <Section isFancy={true}>
      <Heading>
        {title}
      </Heading>
      <p><i>{body}</i></p>
    </Section>
  );
}
