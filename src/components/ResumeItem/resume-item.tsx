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
      <h3 className="resume-item__title">{title}</h3>
      <h4 className="resume-item__subtitle sub-text">{subTitle}</h4>
      <p className="resume-item__description sub-text">{description}</p>
    </div>
  );
}
