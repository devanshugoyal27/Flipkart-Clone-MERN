import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getProductDetails } from "../../redux/action/productAction";
import ActionItem from "./ActionItem";
import { MdLocalOffer } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";

const DetailsView = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { loading, product } = useSelector((state) => state.getProductDetails);

  useEffect(() => {
    if (product && id !== product.id) dispatch(getProductDetails(id));
  }, [dispatch, id, product, loading]);

  console.log("Product:", product);

  const date = new Date(new Date().getTime() + 5 * 24 * 60 * 100);

  return (
    <div className=" mt-[100px] bg-white m-8">
      {product && Object.keys(product).length && (
        <div className="md:grid md:grid-cols-3 md:gap-[35px] ">
          {/* left  */}
          <div className="">
            <ActionItem product={product} />
          </div>
          {/* right  */}
          <div className="md:col-span-2">
            <h2 className="font-semibold text-lg mb-2">
              {product.title.longTitle}
            </h2>
            <p className="text-gray-600 flex gap-2">
              8 Ratings & 1 Reviews{" "}
              <span className="">
                <img
                  src={
                    "https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/fa_62673a.png"
                  }
                  alt="img"
                  width={70}
                />
              </span>
            </p>
            <div className="flex gap-3  items-center">
              <p className="font-bold text-2xl">₹{product.price.cost}</p>
              <p className=" text-lg text-gray-500">
                {" "}
                <strike>₹{product.price.mrp}</strike>
              </p>
              <p className="text-green-600 font-semibold">
                {product.price.discount} Off
              </p>
            </div>
            <p className="text-gray-600 mt-2">Minimum Order Quantity: 1</p>
            <p className="font-semibold text-md my-2">Available Offers</p>
            <p className="mb-2 flex gap-2 md:flex-row flex-col">
              <span className="font-semibold flex gap-2 items-center">
                <MdLocalOffer color="green" />
                Bank Offer
              </span>{" "}
              10% off on HDFC Bank Credit Card EMI Transactions, up to ₹1,500 on
              orders of ₹7,500 and above{" "}
              <span className="text-blue-600">T&C</span>
            </p>
            <p className="mb-2 flex gap-2 md:flex-row flex-col">
              <span className="font-semibold flex gap-2 items-center">
                <MdLocalOffer color="green" />
                Bank Offer
              </span>{" "}
              10% Instant Discount on ICICI Bank Debit Cards, up to ₹250, on
              orders of ₹2000 and above{" "}
              <span className="text-blue-600">T&C</span>
            </p>
            <p className="mb-2 flex gap-2 md:flex-row flex-col">
              <span className="font-semibold flex gap-2 items-center">
                {" "}
                <MdLocalOffer color="green" />
                Bank Offer
              </span>{" "}
              10% Instant Discount on AXIS Bank Debit Cards, up to ₹250, on
              orders of ₹2000 and above{" "}
              <span className="text-blue-600">T&C</span>
            </p>
            <p className="mb-2 flex gap-2 md:flex-row flex-col">
              <span className="font-semibold flex gap-2 items-center">
                {" "}
                <MdLocalOffer color="green" />
                Bank Offer
              </span>{" "}
              10% Instant Discount on YES Bank Debit Cards, up to ₹250, on
              orders of ₹2000 and above{" "}
              <span className="text-blue-600">T&C</span>
            </p>
            <p className="mb-2 flex gap-2 md:flex-row flex-col">
              <span className="font-semibold flex gap-2 items-center">
                <MdLocalOffer color="green" />
                Bank Offer
              </span>{" "}
              10% Instant Discount on SBI Bank Debit Cards, up to ₹250, on
              orders of ₹2000 and above{" "}
              <span className="text-blue-600">T&C</span>
            </p>
            <p className="mb-2 flex gap-2 items-center">
              <MdLocalOffer color="green" />
              <span className="font-semibold">Special Price</span> Get extra 84%
              off (price inclusive of cashback/coupon){" "}
              <span className="text-blue-600">T&C</span>
            </p>
            <p className="text-blue-600 cursor-pointer mb-3">+6 more offers</p>

            <p className="text-gray-700 flex items-center gap-2 mb-2">
              <MdLocationOn color="green" />
              Deliver to
            </p>
            <div className="border-b-2 w-fit mb-4">
              <input
                type="text"
                placeholder="Enter Delivery Pincode"
                className="outline-none"
              />{" "}
              <span className="text-gray-600 cursor-pointer  ">Check</span>
            </div>

            <table className="w-full">
              <tr className="border-b-2">
                <td className="mr-6 py-4 px-4 text-gray-600">Delivery</td>
                <td>Deliverd by {date.toDateString()} | charges ₹40</td>
              </tr>
              <tr className="border-b-2">
                <td className="mr-6 py-4 px-4 text-gray-600">Warranty </td>
                <td>No Warrantry</td>
              </tr>
              <tr className="border-b-2">
                <td className="mr-6 py-4 px-4 text-gray-600">Seller</td>
                <td className="text-blue-600">
                  SuperComNet{" "}
                  <span className="text-black list-item text-sm">
                    10 days return policy
                  </span>
                </td>
              </tr>
            </table>
            <img
              src="https://rukminim1.flixcart.com/lockin/774/185/images/CCO__PP_2019-07-14.png?q=50"
              alt="img"
              width={500}
            />
            <p className="text-gray-700 text-lg my-2">Description:-</p>
            <p>{product.description}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default DetailsView;
