type Props = {
  title: string;
  description: string;
};

export const CourseGoal = (props: Props) => {
  return (
    <article>
      <div>
        <h2>{props.title}</h2>
        <p> {props.description}</p>
      </div>
      <button>Delete</button>
    </article>
  );
};
