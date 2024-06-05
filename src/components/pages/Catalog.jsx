import Input from "../Elements/Input/Index";
import Card from "../Elements/Card/Index";
import Button from "../Elements/Button/Index";
import SideBar from "../Layouts/Sidebar";
import catalog from "../../data/catalog.json";
export default function Catalog() {
  return (
    <div className="pt-20">
      <section id="catalog" className="container pt-5 px-5">
        <div className="catalog-search flex items-center">
          <Input
            type={"text"}
            placeholder={"Cari Produk"}
            styled={"w-full rounded-tr-none rounded-br-none"}
          />
          <Button
            styled={
              "py-2 border border-primary rounded-tl-none rounded-tr-md rounded-bl-none rounded-br-md w-28"
            }
          >
            Search
          </Button>
        </div>
        <div className="content grid lg:grid-cols-3 gap-4">
          <SideBar />
          <div className="flex flex-wrap lg:col-span-2 mt-10">
            <div className="w-full self-center">
              <div className="catalogs flex flex-wrap justify-between lg:justify-start ">
                {catalog.map((item, index) => {
                  return (
                    <Card
                      styled="md:w-80 w-full lg:w-72 xl:w-60 2xl:w-72"
                      key={index}
                    >
                      <div className="card-img flex flex-col items-center m-3">
                        <img
                          className="h-[150px] "
                          src={item.imgUrl}
                          // alt={`Slide ${index + 1}`}
                        />
                      </div>
                      <div className="card-title">
                        <p className="text-lg font-semibold ">{item.name}</p>
                      </div>
                      <div className="card-desc">
                        <p className="text-md mb-5">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Saepe, temporibus.
                        </p>
                      </div>
                      <Button>Detail Produk</Button>
                    </Card>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
