import { Tab } from "@headlessui/react";
import { useEffect, useState } from "react";
import JewelryCard from "../components/AllJewelry/JewelryCard";
import MyContainer from "../components/shared/MyContainer";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function AllJewelry() {
  const [data, setData] = useState();
  const [toFilter, setToFilter] = useState("Earrings");
  const [categoryData, setCategoryData] = useState();

  useEffect(() => {
    fetch("./fakeData.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setData(data);
      });
  }, []);

  useEffect(() => {
    const filteredData = data?.filter((item) => item.category === toFilter);
    console.log(filteredData);
    setCategoryData(filteredData);
  }, [data, toFilter]);
  return (
    <MyContainer>
      {" "}
      <div className="w-full px-2 pt-28 pb-16 sm:px-0">
        <Tab.Group>
          <Tab.List className="flex space-x-1 max-w-md mx-auto rounded-xl bg-[#C29958]/60 p-1 mb-8">
            {["Earring", "Ring", "Necklace", "Bracelet"].map((category) => (
              <Tab
                key={category}
                onClick={() => setToFilter(category)}
                className={({ selected }) =>
                  classNames(
                    "w-full rounded-lg py-2.5 text-sm font-medium leading-5",
                    "ring-white ring-opacity-60 ring-offset-2  ring-offset-[#C29958] focus:outline-none focus:ring-2",
                    selected
                      ? "bg-white text-black shadow"
                      : "text-white hover:bg-white/[0.12] hover:text-white"
                  )
                }
              >
                {category}
              </Tab>
            ))}
          </Tab.List>
          <Tab.Panels className="mt-2">
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-10">
              {categoryData?.map((item, idx) => (
                <JewelryCard key={idx} item={item}></JewelryCard>
              ))}
            </div>
          </Tab.Panels>
        </Tab.Group>
      </div>
    </MyContainer>
  );
}
