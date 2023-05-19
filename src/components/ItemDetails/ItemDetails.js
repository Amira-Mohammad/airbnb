import Diamond from "../../Icons/Diamond";
import FreeCancelation from "../../Icons/FreeCancelation";
import Guests from "../../Icons/Guests";
import SelfCheckIn from "../../Icons/SelfCheckIn";
import Super from "../../Icons/Super";
import WorkSpace from "../../Icons/WorkSpace";
import "./ItemDetails.css";
function ItemDetails() {
  return (
    <div className="overlay " style={{ display: "flex" }}>
      <div className="p-2 closeBtnContainer" style={{ width: "10%" }}>
        <div className=" bg-black close text-end p-2  ">
          <button className="closeBtn rounded-circle">x</button>
        </div>
      </div>
      <div style={{ width: "90%" }} className="bg-white p-4">
        <div className="container-fluid">
          <div className="row">
            <div className="col-6 position-relative ">
              <img
                src="https://framerusercontent.com/images/0RUEx3es60Z3CuB1eFkBxcPxmA.webp"
                className="w-100 h-100 rounded-4 my-2"
              />
              <div className="seeAll position-absolute bg-white p-1 rounded-3">
                See All Photos
              </div>
            </div>

            <div className="col-6 ">
              <div className="secondImg h-50 rounded-4 my-2"></div>
              <div className="thirdImg h-50 rounded-4 my-2"></div>
            </div>

            <div className="col-6 bg-white my-5 ">
              <div className="border d-inline-flex py-1 px-2 rounded-3">
                <div>
                  <Super />
                </div>
                <div>Superhost</div>
              </div>
              <div className="d-flex my-2">
                <div className="icon bgGray p-2  rounded-circle text-center">
                  <i class="fa fa-heart-o" aria-hidden="true"></i>
                </div>
                <div className="icon bgGray p-2 mx-2 rounded-circle text-center">
                  <i class="fa fa-upload " aria-hidden="true"></i>
                </div>
              </div>
              <div className="fs-6 my-1">Whitefish Estate</div>
              <div className="text-muted my-1">
                Whitefish, Montana, United States
              </div>
              <div className="my-4">
                <div className="d-flex my-3">
                  <div>
                    <Guests />
                  </div>
                  <div className="mx-3">16+ guests</div>
                </div>

                <div className="d-flex my-3">
                  <div>
                    <Guests />
                  </div>
                  <div className="mx-3">8 bedrooms</div>
                </div>

                <div className="d-flex my-3">
                  <div>
                    <Guests />
                  </div>
                  <div className="mx-3">8 beds</div>
                </div>

                <div className="d-flex my-3">
                  <div>
                    <Guests />
                  </div>
                  <div className="mx-3">8 baths</div>
                </div>
                <hr className="text-muted my-5" />
                <div className="my-4">
                  <WorkSpace />
                </div>
                <div className="text-black fs-6">Dedicated workspace</div>
                <div className="text-muted">
                  A private room with wifi that’s well-suited for working.
                </div>

                <div className="my-4">
                  <SelfCheckIn />
                </div>
                <div className="text-black fs-6">Self check-in</div>
                <div className="text-muted">
                  Check yourself in with the keypad.
                </div>

                <div className="my-4">
                  <FreeCancelation />
                </div>
                <div className="text-black fs-6">
                  Free cancellation before Jul 25
                </div>
                <div className="text-muted">
                  A private room with wifi that’s well-suited for working.
                </div>

                <hr className="text-muted my-5" />
                <p className="fs-5 fw-bold">About this space</p>
                <p className="text-muted">
                  Enjoy a quiet getaway in this charming cottage renovated,
                  designed, and owned by Chip and Joanna Gaines. Originally the
                  carriage house for Hillcrest Estate, this home includes one
                  bedroom, one bath, an office nook and a private back patio.
                  This makes it the perfect getaway for a party of two, or if
                  you’re stopping through town and need a restful place to
                  retreat.
                </p>
                <p className="fs-5 text-black">The space</p>
                <p>
                  An open living, dining, and kitchen area provide ample room in
                  this cozy cottage. French double doors lead you out to the
                  back patio to enjoy your own private outdoor space. A
                  dedicated, covered parking spot for your use. The parking lot
                  is shared with Hillcrest Estate guests.
                </p>
                <button className="bg-transparent border-0 fw-bold text-danger">
                  Read more
                </button>

                <hr className="text-muted my-5" />
              </div>
            </div>
            <div className="checkIn col-6 bg-white my-5 ">
              <div className="bgGray rounded-4 border p-3">
                <div className="d-flex justify-content-between ">
                  <div>
                    <span className="fw-bold mx-2">1500</span>
                    /night
                  </div>
                  <div>
                    <i className="fa fa-star mx-2" aria-hidden="true"></i>
                    <span>5</span>
                  </div>
                </div>
                <div className="d-flex justify-content-between my-3 ">
                  <div className="d-flex flex-column">
                    <label className="text-muted">Check In</label>
                    <input className="form-control w-100" />
                  </div>

                  <div className="d-flex flex-column">
                    <label className="text-muted">Check out</label>
                    <input className="form-control w-100" />
                  </div>
                </div>
                <div>
                  <div>
                    <label className="text-muted">Guests</label>
                    <select className="form-control w-100"></select>
                  </div>
                </div>
                <hr className="text-muted my-4" />
                <div className="d-flex flex-column">
                  <div className="d-flex justify-content-between">
                    <span>
                      6 nights
                      <i
                        class="fa fa-info-circle mx-1 text-muted"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span>$2100</span>
                  </div>

                  <div className="d-flex justify-content-between">
                    <span>
                      Cleaning fee
                      <i
                        class="fa fa-info-circle mx-1 text-muted"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span>$85</span>
                  </div>

                  <div className="d-flex justify-content-between">
                    <span>
                      Airbnb service fee
                      <i
                        class="fa fa-info-circle mx-1 text-muted"
                        aria-hidden="true"
                      ></i>
                    </span>
                    <span>$100</span>
                  </div>

                  <hr className="text-muted my-4" />

                  <div className="d-flex justify-content-between">
                    <span className="d-flex flex-column">
                      <span className="fw-bold">Total</span>
                      <span className="text-muted">Before taxes</span>
                    </span>
                    <span>$2180</span>
                  </div>
                  <button className="btn btn-danger rounded-3 p-2 my-3">
                    Reserve
                  </button>
                </div>
              </div>
              <div className="rareFind my-3 rounded-4 border p-3 d-flex">
                <div>
                  <Diamond />
                </div>
                <div className="d-flex flex-column">
                  <div className="fw-bold">This is a rare find</div>
                  <div className="text-muted">
                    Kathryn's place on Airbnb is usually fully booked.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ItemDetails;
