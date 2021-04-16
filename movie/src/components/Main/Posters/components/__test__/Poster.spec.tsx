// import React from "react";
// // import renderer from "react-test-renderer";
// import toJSON from "enzyme-to-json";
// import { mount, ReactWrapper } from "enzyme";
// import Poster from "../Poster";
// import { CARD_PROP_MOC } from "../../../../../variables/mock";
// import "../../../../../setupTests";

// // describe("should render Poster component", () => {
// //   it("should render Poster snapshot", () => {
// //     const wrapper = renderer
// //       .create(
// //         <Poster
// //           key={CARD_PROP_MOC.id}
// //           release_date={CARD_PROP_MOC.release_date}
// //           title={CARD_PROP_MOC.title}
// //           vote_average={CARD_PROP_MOC.vote_average}
// //           poster_path={CARD_PROP_MOC.poster_path}
// //         />,
// //       )
// //       .toJSON();
// //     expect(wrapper).toMatchSnapshot();
// //   });
// // });
// describe("<Poster />", () => {
//   let wrapper: ReactWrapper;
//   beforeEach(() => {
//     wrapper = mount(
//       <Poster
//         key={CARD_PROP_MOC.id}
//         release_date={CARD_PROP_MOC.release_date}
//         title={CARD_PROP_MOC.title}
//         vote_average={CARD_PROP_MOC.vote_average}
//         poster_path={CARD_PROP_MOC.poster_path}
//       />,
//     );
//   });
//   it("should mount", () => {
//     expect(toJSON(wrapper)).toMatchSnapshot();
//   });
// });
