import "./resume-item.scss";

type ResumeItemProps = {
  title?: string;
  subTitle?: string;
  description?: string;
};

export default function ResumeItem({
  title,
  subTitle,
  description,
}: ResumeItemProps) {
  return (
    <div className="resume-item">
      <h3>{title}</h3>
      <h4 className="sub-text">{subTitle}</h4>
      <p className="sub-text">{description}</p>
    </div>
  );
}
