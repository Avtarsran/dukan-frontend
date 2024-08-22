import BottomCard from "./components/BottomCard";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Overview from "./components/Overview";
import SideBar from "./components/SideBar";
import Tables from "./components/Tables";
import Transactions from "./components/Transactions";

function App() {
  return (
    <div className="flex flex-wrap">
      <div className="flex-none md:w-1/4">
        <SideBar></SideBar>
      </div>
      <div className="flex flex-col flex-initial w-full md:w-3/4 -mt-12 md:mt-0">
        <Navbar></Navbar>

        <div className="flex flex-col flex-wrap mt-10 mx-3">
          <div>
            <Overview></Overview>
          </div>
          <div className="flex mt-3 justify-between flex-col sm:flex-wrap sm:justify-evenly  md:flex-row ">
            <div className="mt-0 sm:mt-3 md:mt-8">
            <Card
              title={"Next Payout"}
              amount={"10,33,44.00"}
              orders={"13 order(s)"}
              bgColor={"blue"}
              color={"white"}
            ></Card>
            <BottomCard></BottomCard>
            </div>
            <div className="mt-0 sm:mt-3 md:mt-8">
            <Card
              title={"Amount Payable"}
              amount={"10,33,44.00"}
              orders={"13 order(s)"}
              colorForOrder={"blue"}
            ></Card>
            </div>
            <div className="mt-0 sm:mt-3 md:mt-8">
            <Card
              title={"Amount Processed"}
              amount={"10,33,44.00"}
              orders={"13 order(s)"}
              colorForOrder={"blue"}
            ></Card>
            </div>
          </div>
          <div className="mt-4">
              <Transactions></Transactions>
          </div>
          <div>
            <Tables></Tables>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
