import { features } from "../Constant";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatureCard  = ({icon, title, content, id}) => (
    <div className={`flex flex-row flex-1 p-6 rounded-[20px] 
    ${features !== features.length -1 ? "mb-6" : "mb-0"} feature-card`}>
      <div className={`h-[64px] w-[64px] rounded-full  ${styles.flexCenter} bg-dimBlue `}>
        <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain"/>
      </div>
      <div className="flex flex-1 flex-col ml-3">
          <h4 className={`text-white mb-2 font-poppins font-semibold`}>
            {title}
          </h4>
          <p className="text-white">
            {content}
          </p>
      </div>
    </div> 
)

const Business = () => (
  <section id="features" className={`${layout.section}`}>
    <div className={`${layout.sectionInfo}`}>
      <h2 className={styles.heading2}>
        You do the business,
        <br className="sm:block hidden" /> we’ll handle the money.
      </h2>
      <p className={`${styles.paragraph} max-w-[570px] mt-5`}>
        With the right credit card, you can improve your financial life by
        building credit, earning rewards and saving money. But with hundreds of
        credit cards on the market.
      </p>
      <Button />
    </div>
    <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature,index) => (
          <FeatureCard  key={feature.id} {...feature} index="index" />
        ))}
    </div>
  </section>
);

export default Business;