import Input from "../Elements/Input/Index";

export default function SideBar() {
  const filterLists = [
    {
      name: "All",
      checked: false,
    },
    {
      name: "Tenda & Shelter",
      checked: true,
    },
    {
      name: "Carrier",
      checked: true,
    },
    {
      name: "Camp Gear",
      checked: false,
    },
    {
      name: "Cooking Gear",
      checked: false,
    },
  ];
  return (
    <div className="h-full mt-10">
      <h2 className="font-bold mb-3">Filter</h2>
      <div className="catalog-item-filter border p-3 rounded-md shadow-md">
        <p className="font-semibold text-slate-700 mb-2">Items:</p>
        {filterLists.map((item, index) => {
          return (
            <div className=" flex items-center" key={index}>
              <Input
                type={"checkbox"}
                checked={item.checked}
                styled={
                  "w-4 h-4 text-primary bg-gray-100 border-slate-300 rounded accent-primary focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                }
                id={"all"}
              />
              <label
                htmlFor="all"
                className="w-full py-1 ms-2 text-sm font-medium text-slate-800 dark:text-gray-300"
              >
                {item.name}
              </label>
            </div>
          );
        })}
        {/*         
        <div className="flex items-center">
          <Input
            type={"checkbox"}
            styled="w-4 h-4 text-primary bg-gray-100 border-slate-300 rounded focus:ring-primary dark:focus:ring-primary accent-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            id={"all"}
          />
          <label
            htmlFor="all"
            className="w-full py-1 ms-2 text-sm font-medium text-slate-800 dark:text-gray-300"
          >
            Tenda & Shelter
          </label>
        </div>
        <div className="flex items-center">
          <Input
            type={"checkbox"}
            styled={
              "w-4 h-4 text-primary bg-gray-100 border-slate-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            }
            id={"all"}
          />
          <label
            htmlFor="all"
            className="w-full py-1 ms-2 text-sm font-medium text-slate-800 dark:text-gray-300"
          >
            Carrier
          </label>
        </div>
        <div className="flex items-center">
          <Input
            type={"checkbox"}
            styled={
              "w-4 h-4 text-primary bg-gray-100 border-slate-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            }
            id={"all"}
          />
          <label
            htmlFor="all"
            className="w-full py-1 ms-2 text-sm font-medium text-slate-800 dark:text-gray-300"
          >
            Camp Gear
          </label>
        </div>
        <div className="flex items-center">
          <Input
            type={"checkbox"}
            styled={
              "w-4 h-4 text-primary bg-gray-100 border-slate-300 rounded focus:ring-primary dark:focus:ring-primary dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
            }
            id={"all"}
          />
          <label
            htmlFor="all"
            className="w-full py-1 ms-2 text-sm font-medium text-slate-800 dark:text-gray-300"
          >
            Cooking Gear
          </label>
        </div> */}
      </div>
    </div>
  );
}
