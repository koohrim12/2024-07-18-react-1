import React from "react";
import "./App.css";

const content = `
  Lorem ipsum dolor sit amet consectetur. A eu id mollis pellentesque tellus bibendum sagittis.
  Eu nunc eu sed nec nisi. Leo eget urna id congue fusce in venenatis sagittis id. Pretium egestas id morbi eget id commodo adipiscing.
  Orci vitae aliquam tincidunt vulputate consectetur netus facilisis facilisis nulla. Pellentesque blandit lacus mattis mauris facilisi blandit at pharetra.
  Nulla quis tellus in felis sagittis viverra viverra ac. Vestibulum quam dui amet cursus amet dictum vitae felis molestie.
  Malesuada eget pellentesque quis nec euismod. A nisi vel elit cras facilisis sed nunc egestas quis. Neque aliquam vitae facilisis blandit.
  Donec lacus nunc massa sed pellentesque nam eget gravida tortor. Dignissim ac nulla mi suspendisse viverra mollis rhoncus.
  Sed hendrerit risus nunc gravida pellentesque tellus a vel molestie. Condimentum massa ut porttitor mi.
`;

interface CardProps {
  title: string;
  content: string;
}

const Card: React.FC<CardProps> = ({ title, content }) => (
  <div className="card">
    <h1>{title}</h1>
    <hr />
    <p>{content}</p>
  </div>
);

const App: React.FC = () => (
  <div id="root">
    <div id="card-Container">
      <Card title="INDENTATION" content={content} />
      <Card title="EXCLUSIVE" content={content} />
    </div>
  </div>
);

export default App;
