import { twMerge } from "tailwind-merge";
export default function Card(props) {
  const { styled } = props;
  return (
    <div className={twMerge(`card shadow-md rounded-xl mb-10 m-3 p-3`, styled)}>
      <div className="card-content m-3 text-center">{props.children}</div>
    </div>
  );
}
