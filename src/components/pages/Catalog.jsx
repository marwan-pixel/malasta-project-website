import Input from "../Elements/Input/Index";
import Card from "../Elements/Card/Index";
import Button from "../Elements/Button/Index";
import SideBar from "../Layouts/Sidebar";
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
        <div className="content grid grid-cols-3">
          <SideBar />
          <div className="flex flex-wrap col-span-2 mt-10">
            <div className="w-full self-center px-5">
              <div className="catalogs flex flex-wrap justify-center sm:justify-between ">
                <Card styled="w-72">
                  <div className="card-img flex flex-col items-center m-3">
                    <img
                      className="h-[150px] "
                      src={"BP90193153-grey.jpg"}
                      // alt={`Slide ${index + 1}`}
                    />
                  </div>
                  <div className="card-title">
                    <p className="text-lg font-semibold ">Carrier Bag</p>
                  </div>
                  <div className="card-desc">
                    <p className="text-md mb-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, temporibus.
                    </p>
                  </div>
                  <Button>Detail Produk</Button>
                </Card>
                <Card styled="w-72">
                  <div className="card-img flex flex-col items-center m-3">
                    <img
                      className="h-[150px] "
                      src={"BP90193153-grey.jpg"}
                      // alt={`Slide ${index + 1}`}
                    />
                  </div>
                  <div className="card-title">
                    <p className="text-lg font-semibold ">Carrier Bag</p>
                  </div>
                  <div className="card-desc">
                    <p className="text-md mb-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, temporibus.
                    </p>
                  </div>
                  <Button>Detail Produk</Button>
                </Card>
                <Card styled="w-72">
                  <div className="card-img flex flex-col items-center m-3">
                    <img
                      className="h-[150px] "
                      src={"BP90193153-grey.jpg"}
                      // alt={`Slide ${index + 1}`}
                    />
                  </div>
                  <div className="card-title">
                    <p className="text-lg font-semibold ">Carrier Bag</p>
                  </div>
                  <div className="card-desc">
                    <p className="text-md mb-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, temporibus.
                    </p>
                  </div>
                  <Button>Detail Produk</Button>
                </Card>
                <Card styled="w-72">
                  <div className="card-img flex flex-col items-center m-3">
                    <img
                      className="h-[150px] "
                      src={"BP90193153-grey.jpg"}
                      // alt={`Slide ${index + 1}`}
                    />
                  </div>
                  <div className="card-title">
                    <p className="text-lg font-semibold ">Carrier Bag</p>
                  </div>
                  <div className="card-desc">
                    <p className="text-md mb-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, temporibus.
                    </p>
                  </div>
                  <Button>Detail Produk</Button>
                </Card>
                <Card styled="w-72">
                  <div className="card-img flex flex-col items-center m-3">
                    <img
                      className="h-[150px] "
                      src={"BP90193153-grey.jpg"}
                      // alt={`Slide ${index + 1}`}
                    />
                  </div>
                  <div className="card-title">
                    <p className="text-lg font-semibold ">Carrier Bag</p>
                  </div>
                  <div className="card-desc">
                    <p className="text-md mb-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, temporibus.
                    </p>
                  </div>
                  <Button>Detail Produk</Button>
                </Card>
                <Card styled="w-72">
                  <div className="card-img flex flex-col items-center m-3">
                    <img
                      className="h-[150px] "
                      src={"BP90193153-grey.jpg"}
                      // alt={`Slide ${index + 1}`}
                    />
                  </div>
                  <div className="card-title">
                    <p className="text-lg font-semibold ">Carrier Bag</p>
                  </div>
                  <div className="card-desc">
                    <p className="text-md mb-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, temporibus.
                    </p>
                  </div>
                  <Button>Detail Produk</Button>
                </Card>
                <Card styled="w-72">
                  <div className="card-img flex flex-col items-center m-3">
                    <img
                      className="h-[150px] "
                      src={"BP90193153-grey.jpg"}
                      // alt={`Slide ${index + 1}`}
                    />
                  </div>
                  <div className="card-title">
                    <p className="text-lg font-semibold ">Carrier Bag</p>
                  </div>
                  <div className="card-desc">
                    <p className="text-md mb-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, temporibus.
                    </p>
                  </div>
                  <Button>Detail Produk</Button>
                </Card>
                <Card styled="w-72">
                  <div className="card-img flex flex-col items-center m-3">
                    <img
                      className="h-[150px] "
                      src={"BP90193153-grey.jpg"}
                      // alt={`Slide ${index + 1}`}
                    />
                  </div>
                  <div className="card-title">
                    <p className="text-lg font-semibold ">Carrier Bag</p>
                  </div>
                  <div className="card-desc">
                    <p className="text-md mb-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, temporibus.
                    </p>
                  </div>
                  <Button>Detail Produk</Button>
                </Card>
                <Card styled="w-72">
                  <div className="card-img flex flex-col items-center m-3">
                    <img
                      className="h-[150px] "
                      src={"BP90193153-grey.jpg"}
                      // alt={`Slide ${index + 1}`}
                    />
                  </div>
                  <div className="card-title">
                    <p className="text-lg font-semibold ">Carrier Bag</p>
                  </div>
                  <div className="card-desc">
                    <p className="text-md mb-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, temporibus.
                    </p>
                  </div>
                  <Button>Detail Produk</Button>
                </Card>
                <Card styled="w-72">
                  <div className="card-img flex flex-col items-center m-3">
                    <img
                      className="h-[150px] "
                      src={"BP90193153-grey.jpg"}
                      // alt={`Slide ${index + 1}`}
                    />
                  </div>
                  <div className="card-title">
                    <p className="text-lg font-semibold ">Carrier Bag</p>
                  </div>
                  <div className="card-desc">
                    <p className="text-md mb-5">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Saepe, temporibus.
                    </p>
                  </div>
                  <Button>Detail Produk</Button>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
