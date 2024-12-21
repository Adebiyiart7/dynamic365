import { Sparkles } from "lucide-react";
import { BsBank2 } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import { SiThurgauerkantonalbank } from "react-icons/si";

const ActivityCard = ({
  icon: Icon,
  title,
  organization,
  amount,
  daysToClose,
  action,
}) => (
  <div className="bg-white rounded-lg p-3 mb-4 hover:shadow-sm drop-shadow transition-shadow cursor-pointer">
    <div className="flex items-start gap-2">
      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
        <Icon className="w-4 h-4 text-gray-700" />
      </div>
      <div className="flex-1">
        <h3 className="font-semibold text-sm text-gray-900 leading-none ">
          {title}
        </h3>
        <div className="flex items-center gap-2 text-[10px] text-gray-600 mt-1 leading-none">
          <span>{organization}</span>
          <span>•</span>
          <span>${amount.toLocaleString()}</span>
          <span>•</span>
          <span>{daysToClose} days to close</span>
        </div>
      </div>
    </div>
    <div className="flex items-center">
      <div className="mt-1.5 flex flex-1 mr-1 items-center gap-2 text-sm bg-gray-100 p-1 px-2 rounded">
        <div className="flex items-center text-gray-700 text-xs font-medium">
          <MdOutlineEmail className="w-4 h-4 mr-2" />
          <span>{action}</span>
        </div>
      </div>
      <Sparkles className="text-blue-600 w-3 h-3" />
    </div>
  </div>
);

const KeyActivities = () => {
  const activities = [
    {
      icon: SiThurgauerkantonalbank,
      title: "Cafe A100 for Woodland Bank",
      organization: "Woodland Bank",
      amount: 280000,
      daysToClose: 8,
      action: "Review draft and reply to Chris Naido",
    },
    {
      icon: BsBank2,
      title: "Partnership opportunity for Fabrikam",
      organization: "Fabrikam",
      amount: 5000000,
      daysToClose: 12,
      action: "Prepare me for Fabrikam's key stakeholder meeting",
    },
  ];

  return (
    <div className="max-w-2xl mx-auto p-4">
      {activities.map((activity, index) => (
        <ActivityCard key={index} {...activity} />
      ))}
      <button className="text-blue-600 hover:text-blue-700 text-xs font-semibold">
        Show all key activities
      </button>
    </div>
  );
};

export default KeyActivities;
