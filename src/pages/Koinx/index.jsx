import React, { axios, useEffect, useState } from "react";
import { Helmet } from "react-helmet";
import { Button, Img, Text, Heading } from "../../components";
import { TabPanel, TabList, Tab, Tabs } from "react-tabs";

export default function KoinxPage() {
  const [data, setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=inr%2Cusd&include_24hr_change=true');
        setData(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Helmet>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col items-center justify-start w-full gap-[17px] bg-blue_gray-50_01">
        <header className="flex justify-center items-center w-full border-gray-300 border-b border-solid bg-white-A700 shadow-xs">
          <div className="flex flex-row justify-center w-full mx-auto max-w-[1324px]">
            <div className="flex flex-row justify-between items-center w-full">
              <div className="flex flex-row justify-center py-6">
                <Img src="images/img_1_koinx_logo.png" alt="1koinxlogo_one" className="w-full object-cover" />
              </div>
              <div className="flex flex-row justify-start items-center w-[69%] gap-[45px]">
                <div className="flex flex-row justify-start items-center w-[81%] pl-[355px] gap-8">
                  <Text />
                  <Heading
                    size="xs"
                    as="h6"
                    className="flex justify-center items-center w-[79px] h-[70px] py-[25px] tracking-[-0.16px] bg-white-A700"
                  >
                    Free Tools
                  </Heading>
                  <Heading
                    size="xs"
                    as="h6"
                    className="flex justify-center items-center w-32 h-[70px] py-[25px] tracking-[-0.16px] bg-white-A700"
                  >
                    Resource Center
                  </Heading>
                </div>
                <Button
                  size="lg"
                  variant="gradient"
                  color="blue_A400_indigo_A700"
                  className="tracking-[-0.16px] font-semibold min-w-[136px]"
                >
                  Get Started
                </Button>
              </div>
            </div>
          </div>
        </header>
        <div className="flex flex-col items-start justify-start w-full gap-[17px] max-w-[1328px]">
          <div className="flex flex-row justify-start w-[15%]">
            <div className="flex flex-row justify-start items-center w-3/4 gap-[9px]">
              <Text size="lg" as="p" className="!text-blue_gray-700_01 !font-normal">
                Cryptocurrencies
              </Text>
              <Img src="images/img_icon.svg" alt="icon_one" className="h-2.5 w-2.5 mr-1" />
            </div>
            <div className="flex flex-row justify-center w-[26%]">
              <Text size="lg" as="p" className="!text-gray-900">
                Bitcoin
              </Text>
            </div>
          </div>
          <div className="flex flex-col items-center justify-center w-full pb-[2706px]">
            <div className="flex flex-row justify-center items-start w-full">
              <div className="flex flex-col items-center justify-start w-[70%]">
                <Tabs
                  className="flex flex-col items-start justify-start w-[96%] pl-[23px] py-[23px] bg-white-A700 rounded-lg"
                  selectedTabClassName="!text-blue-800_01 bg-blue-50_01 rounded-[10px]"
                  selectedTabPanelClassName="mt-[39px] mb-[9px] relative tab-panel--selected"
                >
                  <div className="flex flex-row justify-start items-center w-full gap-9">
                    <div className="flex flex-row justify-start w-[19%]">
                      <div className="flex flex-row justify-start w-full">
                        <div className="flex flex-row justify-start items-center w-full">
                          <Img src="images/img_image_160.png" alt="image160_one" className="w-9 object-cover" />
                          <div className="flex flex-row justify-end w-[79%]">
                            <div className="flex flex-row justify-start items-start w-[94%] gap-2">
                              <div className="flex flex-row justify-center w-[67%]">
                                <Heading as="h1" className="!text-gray-900_02">
                                  Bitcoin
                                </Heading>
                              </div>
                              <Heading size="xs" as="h2" className="mt-[3px] !text-blue_gray-600">
                                BTC
                              </Heading>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row justify-start w-[10%]">
                      <Button
                        color="blue_gray_400_02"
                        size="lg"
                        className="w-full font-medium border-blue_gray-400 border border-solid"
                      >
                        Rank #1
                      </Button>
                    </div>
                  </div>
                  <div>
      {data && data.bitcoin && ( // Check if data and data.bitcoin are not null
        <div className="flex flex-row justify-between items-start w-[67%] mt-10">
          <div className="flex flex-col items-start justify-start gap-1.5 py-0.5">
            <Heading size="xl" as="h3" className="!text-gray-900_02">
              ${data.bitcoin.usd}
            </Heading>
            <Text as="p">₹ {data.bitcoin.inr}</Text>
          </div>
          <div className="flex flex-row justify-center w-[67%]">
            <div className="flex flex-row justify-start w-full pb-0.5">
              <div className="flex flex-row justify-start w-[36%]">
                <div className="flex flex-row justify-start items-start w-full gap-3 py-[3px]">
                  <Button
                    leftIcon={<Img src="images/img_polygon_2.svg" alt="Polygon 2" />}
                    className="mb-0.5 gap-2 font-medium min-w-[84px] rounded"
                  >
                    {data.bitcoin.usd_24h_change}%
                  </Button>
                  <Text size="lg" as="p" className="mt-1 !text-blue_gray-400_02">
                    (24H)
                  </Text>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
                  <div className="h-px w-[97%] mt-6 bg-gray-300_01" />
                  <div className="flex flex-row justify-between w-[96%] mt-[22px]">
                    <Heading size="xs" as="h4" className="mt-px !text-gray-900_02">
                      Bitcoin Price Chart (USD)
                    </Heading>
                    <TabList className="flex flex-row justify-between items-center w-auto gap-[17px]">
                      <Tab className="h-4 text-blue_gray-600 text-[13px] font-medium">1H</Tab>
                      <Tab className="text-blue_gray-600 text-[13px] font-medium">24H</Tab>
                      <Tab className="h-4 text-blue-800_01 text-[13px] font-medium">7D</Tab>
                      <Tab className="text-blue_gray-600 text-xs font-medium">1M</Tab>
                      <Tab className="text-blue_gray-600 text-xs font-medium">3M</Tab>
                      <Tab className="text-blue_gray-600 text-xs font-medium">6M</Tab>
                      <Tab className="h-4 text-blue_gray-600 text-[13px] font-medium">1Y</Tab>
                      <Tab className="text-blue_gray-600 text-[13px] font-medium">ALL</Tab>
                    </TabList>
                  </div>
                  {[...Array(8)].map((_, index) => (
                    <TabPanel key={`tab-panel${index}`} className="w-[97%] absolute">
                      <div className="flex flex-row justify-start w-[97%] mt-[39px] mb-[9px]">
                        <div className="flex flex-row justify-start w-full">
                          <div className="flex flex-row justify-start w-full py-[3px]">
                            <div className="flex flex-row justify-start items-start w-[99%]">
                              <div className="flex flex-col items-center justify-start w-[5%] gap-[45px] z-[1]">
                                <Text size="xs" as="p" className="text-right">
                                  47,000
                                </Text>
                                <Text size="xs" as="p" className="text-right">
                                  46,000
                                </Text>
                                <Text size="xs" as="p" className="text-right">
                                  45,000
                                </Text>
                                <Text size="xs" as="p" className="text-right">
                                  44,000
                                </Text>
                                <Text size="xs" as="p" className="text-right">
                                  42,000
                                </Text>
                                <Text size="xs" as="p" className="text-right">
                                  42,000
                                </Text>
                              </div>
                              <div className="flex flex-col items-start justify-start w-[96%] mt-[5px] ml-[-3px] gap-1.5">
                                <div className="flex flex-col items-center justify-start w-full ml-1.5 pb-2">
                                  <div className="h-px w-full bg-blue_gray-50_03" />
                                  <div className="h-[318px] w-full mt-[35px] relative">
                                    <div className="flex flex-col items-center justify-start w-full gap-[58px] top-[7%] right-0 left-0 m-auto absolute">
                                      <div className="h-px w-full bg-blue_gray-50_03" />
                                      <div className="h-px w-full bg-blue_gray-50_03" />
                                      <div className="h-px w-full bg-blue_gray-50_03" />
                                      <div className="h-px w-full bg-blue_gray-50_03" />
                                      <div className="h-px w-full bg-blue_gray-50_03" />
                                    </div>
                                    <Img
                                      src="images/img_group.png"
                                      alt="image"
                                      className="justify-center h-[318px] w-full left-0 bottom-0 right-0 top-0 m-auto object-cover absolute"
                                    />
                                  </div>
                                  <Img src="images/img_group_indigo_100.svg" alt="image_one" className="h-2.5 z-[1]" />
                                  <div className="h-px w-full mt-[-9px] bg-blue_gray-50_03" />
                                </div>
                                <div className="flex flex-row justify-start w-[92%]">
                                  <div className="flex flex-row justify-between w-full">
                                    <Text size="xs" as="p" className="text-center">
                                      16 Dec
                                    </Text>
                                    <Text size="xs" as="p" className="text-center">
                                      17 Dec
                                    </Text>
                                    <Text size="xs" as="p" className="text-center">
                                      18 Dec
                                    </Text>
                                    <Text size="xs" as="p" className="text-center">
                                      19 Dec
                                    </Text>
                                    <Text size="xs" as="p" className="text-center">
                                      20 Dec
                                    </Text>
                                    <Text size="xs" as="p" className="text-center">
                                      21 Dec
                                    </Text>
                                    <Text size="xs" as="p" className="text-center">
                                      22 Dec
                                    </Text>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </TabPanel>
                  ))}
                </Tabs>
                <div className="h-[70px] w-[96%] mt-[9px] relative">
                  <div className="flex flex-col items-end justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="flex flex-row justify-end items-center w-full z-[1]">
                      <div className="flex flex-row justify-between w-2/5">
                        <div className="flex flex-row justify-between w-[61%]">
                          <div className="flex flex-row justify-center py-6">
                            <Text as="p" className="!text-gray-800 tracking-[-0.16px]">
                              Overview
                            </Text>
                          </div>
                          <div className="flex flex-row justify-center py-6">
                            <Text as="p" className="!text-gray-800 tracking-[-0.16px]">
                              Fundamentals
                            </Text>
                          </div>
                        </div>
                        <div className="flex flex-row justify-center py-[23px]">
                          <Text as="p" className="mt-0.5 !text-gray-800 tracking-[-0.16px]">
                            News Insights
                          </Text>
                        </div>
                      </div>
                      <div className="h-12 w-full ml-[-348px] border-blue_gray-100 border-b border-solid" />
                    </div>
                    <div className="flex flex-row justify-between w-[32%] mt-[-70px] mr-28">
                      <div className="flex flex-row justify-between w-[56%]">
                        <div className="flex flex-col items-center justify-start py-6">
                          <Text as="p" className="!text-gray-800 tracking-[-0.16px]">
                            Team
                          </Text>
                        </div>
                        <div className="flex flex-row justify-center py-6">
                          <Text as="p" className="!text-gray-800 tracking-[-0.16px]">
                            Technicals
                          </Text>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center py-6">
                        <Text as="p" className="!text-gray-800 tracking-[-0.16px]">
                          Tokenomics
                        </Text>
                      </div>
                    </div>
                  </div>
                  <Heading
                    size="xs"
                    as="h5"
                    className="justify-center w-max left-0 bottom-0 right-0 top-0 py-3.5 m-auto !text-blue-800_01 tracking-[-0.16px] border-blue-A700_01 border-b-[3px] border-solid absolute"
                  >
                    Sentiment
                  </Heading>
                </div>
                <div className="h-[554px] w-full mt-[9px] relative">
                  <div className="justify-center h-[554px] w-[96%] left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute rounded-lg" />
                  <div className="flex flex-col items-start justify-start w-full h-max gap-[33px] right-0 bottom-0 top-0 m-auto absolute">
                    <div className="flex flex-col items-start justify-start w-full gap-[15px]">
                      <div className="flex flex-row justify-start">
                        <Heading as="h6">Sentiment</Heading>
                      </div>
                      <div className="flex flex-row justify-start items-center w-[77%] gap-px">
                        <div className="flex flex-row justify-start w-[15%]">
                          <Heading size="s" as="h6" className="!text-blue_gray-800_01 !text-[18.91px]">
                            Key Events
                          </Heading>
                        </div>
                        <Img src="images/img_svg_margin.svg" alt="svgmargin_one" className="h-5" />
                      </div>
                      <div className="flex flex-row justify-start w-full gap-3.5">
                        <div className="flex flex-row justify-center w-1/2 p-[17px] border-blue-50 border border-solid bg-blue-50 rounded-[12px]">
                          <div className="flex flex-row justify-start items-center w-full mb-5 gap-2">
                            <Img src="images/img_aside.svg" alt="aside_one" className="h-[147px]" />
                            <div className="flex flex-col items-center justify-start w-[88%] gap-2">
                              <div className="flex flex-row justify-center w-full">
                                <div className="flex flex-row justify-start w-full">
                                  <Text size="lg" as="p" className="w-[95%] !text-gray-900_01 !font-sfprotext">
                                    Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim
                                    tincidunt.
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row justify-center w-full">
                                <Text size="lg" as="p" className="!text-blue_gray-700_01 !font-sfprotext !font-normal">
                                  Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.
                                  Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a
                                  bibendum in. Sed vitae sit nisi viverra natoque lacinia libero enim.
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="h-[204px] w-[46%] relative">
                          <div className="h-[204px] w-[93%] left-0 bottom-0 top-0 m-auto border-blue-50 border border-solid bg-blue_gray-50 absolute rounded-[12px]" />
                          <div className="flex flex-row justify-start items-start w-full gap-2 right-0 top-[9%] m-auto absolute">
                            <Img
                              src="images/img_frame_1116601921.svg"
                              alt="circleimage"
                              className="h-11 w-11 mt-px rounded-[50%]"
                            />
                            <div className="flex flex-col items-center justify-start w-[88%] gap-2">
                              <div className="flex flex-row justify-center w-full">
                                <div className="flex flex-row justify-start w-full">
                                  <Text size="lg" as="p" className="w-[87%] !text-gray-900_01 !font-sfprotext">
                                    Lorem ipsum dolor sit amet consectetur. Dui vel quis dignissim mattis enim
                                    tincidunt.
                                  </Text>
                                </div>
                              </div>
                              <div className="flex flex-row justify-center w-full">
                                <div className="h-[100px] w-full relative">
                                  <Text
                                    size="lg"
                                    as="p"
                                    className="justify-center w-full h-full left-0 bottom-0 right-0 top-0 m-auto !text-blue_gray-700_01 !font-sfprotext !font-normal absolute"
                                  >
                                    Lorem ipsum dolor sit amet consectetur. Ac phasellus risus est faucibus metus quis.
                                    Amet sapien quam viverra adipiscing condimentum. Ac consectetur et pretium in a
                                    bibendum in. Sed vitae sit nisi viverra <br />
                                    in a adipisinc metus quis del
                                  </Text>
                                  <Img
                                    src="images/img_button.svg"
                                    alt="button_one"
                                    className="h-[60px] w-[60px] right-[21%] top-[7%] m-auto absolute"
                                  />
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-col items-center justify-start w-[77%] pb-[22px] gap-[21px]">
                      <div className="flex flex-row justify-start items-center w-full gap-px">
                        <div className="flex flex-row justify-start w-[24%]">
                          <Heading size="s" as="h6" className="!text-blue_gray-800_01 !text-[18.91px]">
                            Analyst Estimates
                          </Heading>
                        </div>
                        <Img src="images/img_svg_margin.svg" alt="svgmargin_three" className="h-5" />
                      </div>
                      <div className="flex flex-row justify-center items-center w-full">
                        <div className="flex flex-row justify-start w-[22%]">
                          <div className="flex flex-col items-center justify-center w-3/4 p-[27px] bg-blue_gray-50 rounded-[50%]">
                            <div className="flex flex-row justify-start items-center w-[97%] gap-0.5 py-[3px] my-1">
                              <div className="flex flex-col items-center justify-center w-[74%]">
                                <Text size="3xl" as="p" className="h-[45px] mb-px !text-teal-A700 !text-[36.41px]">
                                  76
                                </Text>
                              </div>
                              <div className="flex flex-col items-center justify-start w-[24%]">
                                <Text as="p" className="!text-teal-A700">
                                  %
                                </Text>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="flex flex-col w-[78%] gap-px">
                          <div className="flex flex-row justify-start items-center w-full p-2">
                            <div className="flex flex-row justify-start w-[10%]">
                              <Text size="xl" as="p" className="mt-0.5 !text-blue_gray-400_01">
                                Buy
                              </Text>
                            </div>
                            <div className="h-2 w-[65%] bg-teal-500 rounded-sm" />
                            <div className="flex flex-row justify-end w-[8%]">
                              <Text size="lg" as="p" className="!text-blue_gray-400_01 !text-[14.25px]">
                                76%
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start items-center w-full p-2">
                            <div className="flex flex-row justify-start w-[10%]">
                              <Text size="xl" as="p" className="mt-px !text-blue_gray-400_01 !text-[15.13px]">
                                Hold
                              </Text>
                            </div>
                            <div className="h-2 w-[7%] bg-gray-400 rounded-sm" />
                            <div className="flex flex-row justify-center w-[8%]">
                              <Text size="xl" as="p" className="ml-2 mr-1.5 !text-blue_gray-400_01 !text-[15.63px]">
                                8%
                              </Text>
                            </div>
                          </div>
                          <div className="flex flex-row justify-start items-center w-full p-2">
                            <div className="flex flex-row justify-start w-[10%]">
                              <Text size="xl" as="p" className="mt-px !text-blue_gray-400_01 !text-[15.13px]">
                                Sell
                              </Text>
                            </div>
                            <div className="h-2 w-[13%] bg-red-500 rounded-sm" />
                            <div className="flex flex-row justify-end w-[8%]">
                              <Text size="xl" as="p" className="!text-blue_gray-400_01 !text-[15.63px]">
                                16%
                              </Text>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="h-[1012px] w-[99%] mt-5 relative">
                  <div className="justify-center h-[995px] w-full left-0 bottom-0 right-0 top-0 m-auto absolute">
                    <div className="justify-center h-[995px] w-[97%] left-0 bottom-0 right-0 top-0 m-auto bg-white-A700 absolute rounded-lg" />
                    <div className="flex flex-col items-start justify-start w-[91%] top-[8%] right-0 left-0 m-auto absolute">
                      <Heading size="s" as="h6" className="!text-gray-900_02 !font-bold">
                        What is Bitcoin?
                      </Heading>
                      <Text as="p" className="mt-2.5 !text-gray-800 !leading-[160%]">
                        Bitcoin’s price today is US$16,951.82, with a 24-hour trading volume of $19.14 B. BTC is +0.36%
                        in the last 24 hours. It is currently -7.70% from its 7-day all-time high of $18,366.66, and
                        3.40% from its 7-day all-time low of $16,394.75. BTC has a circulating supply of 19.24 M BTC and
                        a max supply of 21 M BTC.
                      </Text>
                      <div className="h-px w-full mt-[15px] bg-blue_gray-100_99" />
                      <Heading size="s" as="h6" className="mt-[15px] !text-gray-900_02 !font-bold">
                        Lorem ipsum dolor sit amet
                      </Heading>
                      <Text as="p" className="mt-[9px] !text-gray-800 !leading-[160%]">
                        Lorem ipsum dolor sit amet consectetur. Aliquam placerat sit lobortis tristique pharetra. Diam
                        id et lectus urna et tellus aliquam dictum at. Viverra diam suspendisse enim facilisi diam ut
                        sed. Quam scelerisque fermentum sapien morbi sodales odio sed rhoncus. Ultricies urna volutpat
                        pendisse enim facilisi diam ut sed. Quam scelerisque fermentum sapien morbi sodales odio sed
                        rhoncus. <br />
                        Diam praesent massa dapibus magna aliquam a dictumst volutpat. Egestas vitae pellentesque auctor
                        amet. Nunc sagittis libero adipiscing cursus felis pellentesque interdum. Odio cursus phasellus
                        velit in senectus enim dui. Turpis tristique placerat interdum sed volutpat. Id imperdiet magna
                        eget eros donec cursus nunc. Mauris faucibus diam mi nunc praesent massa turpis a. Integer
                        dignissim augue viverra nulla et quis lobortis phasellus. Integer pellentesque enim convallis
                        ultricies at.
                        <br />
                        Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac.
                        Mi adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis
                        lacinia congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
                      </Text>
                      <div className="h-px w-full mt-[15px] bg-blue_gray-100_99" />
                      <div className="flex flex-row justify-start mt-[15px] py-1.5">
                        <Heading as="h4" className="mt-[3px]">
                          Already Holding Bitcoin?
                        </Heading>
                      </div>
                      <div className="flex flex-row w-full mt-2 pr-[15px] gap-[31px]">
                        <div className="flex flex-row justify-start items-start w-full gap-[27px] p-[11px] bg-gradient1 rounded-[7px]">
                          <Img
                            src="images/img_rectangle_11947.png"
                            alt="image"
                            className="w-32 mt-px object-cover rounded-lg"
                          />
                          <div className="flex flex-col items-start justify-start w-[54%] mt-[9px] mr-3.5 gap-4">
                            <div className="flex flex-row justify-start w-full">
                              <div className="flex flex-row justify-start w-full">
                                <div className="flex flex-row justify-start w-full">
                                  <Heading size="md" as="h5" className="!text-white-A700">
                                    Calculate your Profits
                                  </Heading>
                                </div>
                              </div>
                            </div>
                            <Button
                              color="white_A700"
                              size="md"
                              rightIcon={
                                <Img src="images/img_iconly_light_arrow_right.svg" alt="Iconly/Light/Arrow - Right" />
                              }
                              className="gap-1.5 font-semibold min-w-[132px]"
                            >
                              Check Now
                            </Button>
                          </div>
                        </div>
                        <div className="flex flex-row justify-start items-start w-full gap-[27px] p-[11px] bg-gradient2 rounded-[7px]">
                          <Img
                            src="images/img_rectangle_11947_128x128.png"
                            alt="image"
                            className="w-32 mt-px object-cover rounded-lg"
                          />
                          <div className="flex flex-col items-start justify-start w-[54%] mt-[9px] mr-3.5 gap-4">
                            <div className="flex flex-row justify-start w-full">
                              <div className="flex flex-row justify-start w-full">
                                <div className="flex flex-row justify-start w-full">
                                  <Heading size="md" as="h5" className="!text-white-A700">
                                    Calculate your tax liability
                                  </Heading>
                                </div>
                              </div>
                            </div>
                            <Button
                              color="white_A700"
                              size="md"
                              rightIcon={
                                <Img src="images/img_iconly_light_arrow_right.svg" alt="Iconly/Light/Arrow - Right" />
                              }
                              className="gap-1.5 font-semibold min-w-[132px]"
                            >
                              Check Now
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="h-px w-full mt-[15px] bg-blue_gray-100_99" />
                    </div>
                    <div className="flex flex-row justify-start w-full right-0 top-[2%] m-auto absolute">
                      <Heading as="h4">About Bitcoin</Heading>
                    </div>
                  </div>
                  <div className="flex flex-row justify-center w-[91%] bottom-0 right-0 left-0 m-auto absolute">
                    <Text as="p" className="!text-gray-800 !leading-[160%]">
                      Fermentum hendrerit imperdiet nulla viverra faucibus. Sit aliquam massa vel convallis duis ac. Mi
                      adipiscing semper scelerisque porttitor pulvinar nunc risus. Fermentum potenti iaculis lacinia
                      congue ipsum fames amet dui. Purus ultrices tincidunt volutpat in eget. Ullamcorper dui
                    </Text>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center justify-center w-[33%] ml-[-25px] pb-[1163px] gap-5">
                <div className="flex flex-col items-center justify-start w-full gap-[19px] p-[31px] bg-blue-A700_01 rounded-[16px]">
                  <div className="flex flex-col items-center justify-start w-[90%] pb-4 gap-3.5">
                    <Heading as="h4" className="w-[82%] !text-white-A700 text-center !font-bold !leading-10">
                      Get Started with KoinX for FREE
                    </Heading>
                    <Text size="lg" as="p" className="!text-gray-100_01 text-center !leading-6">
                      With our range of features that you can equip for free,
                      <br />
                      KoinX allows you to be more educated and aware of your tax reports.
                    </Text>
                  </div>
                  <Img src="images/img_frame.svg" alt="image_two" className="h-[166px]" />
                  <Button
                    color="white_A700"
                    size="xl"
                    rightIcon={<Img src="images/img_iconly_light_arrow_right.svg" alt="Iconly/Light/Arrow - Right" />}
                    className="mb-[18px] gap-2.5 font-semibold min-w-[237px]"
                  >
                    Get Started for FREE
                    <br />
                  </Button>
                </div>
                <div className="flex flex-col items-center justify-start w-full gap-[23px] p-6 bg-white-A700 rounded-lg">
                  <div className="flex flex-row justify-start w-full">
                    <Heading as="h4">Trending Coins (24h)</Heading>
                  </div>
                  <div className="flex flex-col items-center justify-start w-full">
                    <div className="flex flex-col w-full gap-5">
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-row justify-start items-center gap-1.5">
                          <Button color="indigo_400" size="xs" shape="circle" className="w-6">
                            <Img src="images/img_component_50.svg" />
                          </Button>
                          <Text as="p" className="!text-gray-900">
                            Ethereum(ETH)
                          </Text>
                        </div>
                        <Button
                          leftIcon={<Img src="images/img_polygon_2.svg" alt="Polygon 2" />}
                          className="gap-2 font-medium min-w-[84px] rounded"
                        >
                          8.21%
                        </Button>
                      </div>
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-row justify-start items-center gap-1.5">
                          <Img src="images/img_image_160.png" alt="image160_one" className="w-6 object-cover" />
                          <Text as="p" className="!text-gray-900">
                            Bitcoin (BTC)
                          </Text>
                        </div>
                        <Button
                          leftIcon={<Img src="images/img_polygon_2.svg" alt="Polygon 2" />}
                          className="gap-2 font-medium min-w-[84px] rounded"
                        >
                          5.26%
                        </Button>
                      </div>
                      <div className="flex flex-row justify-between items-center w-full">
                        <div className="flex flex-row justify-start items-center w-[42%] gap-1.5">
                          <Img src="images/img_image_163.png" alt="image163_one" className="h-6 w-6 rounded-[50%]" />
                          <Text as="p" className="!text-gray-900">
                            Polygon (MATIC)
                          </Text>
                        </div>
                        <Button
                          leftIcon={<Img src="images/img_polygon_2.svg" alt="Polygon 2" />}
                          className="gap-2 font-medium min-w-[84px] rounded"
                        >
                          4.32%
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
