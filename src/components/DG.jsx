import * as React from "react"

import mfmImage from "../assets/mfm.png";
const navigateTo = (path) => {
  window.location.href = path;
};
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={1100}
    height={850}
    style={{
      background: "#fff",
      backgroundColor: "#fff",
      colorScheme: "light",
    }}
    {...props}
  >
    <rect
      width="100%"
      height="100%"
      fill="#fff"
      style={{
        fill: "#fff",
      }}
    />
    <g data-cell-id={0}>
      <g data-cell-id={1}>
        <g data-cell-id="XGC94LKipElDB2QK_oeb-1">
          <path
            fill="#fff"
            stroke="#ff0000"
            d="M330 230h340v110H330z"
            pointerEvents="all"
            style={{
              fill: "#fff",
              stroke: "#ff0000",
            }}
            transform="translate(.5 .5)"
          />
          <switch>
            <foreignObject
              width="100%"
              height="100%"
              pointerEvents="none"
              requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              style={{
                overflow: "visible",
                textAlign: "left",
              }}
            >
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  display: "flex",
                  alignItems: "unsafe center",
                  justifyContent: "unsafe center",
                  width: 338,
                  height: 1,
                  paddingTop: 285,
                  marginLeft: 331,
                }}
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    fontSize: 0,
                    textAlign: "center",
                    color: "#000",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      fontSize: 26,
                      fontFamily: "Helvetica",
                      color: "#000",
                      lineHeight: 1.2,
                      pointerEvents: "all",
                      whiteSpace: "normal",
                      wordWrap: "normal",
                    }}
                  >
                    {"D.G"}
                  </div>
                </div>
              </div>
            </foreignObject>
            <image
              xlinkHref="data:image/png;base64,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wAwJECBAgAABAgQIECBAgACB4QuYYV8FNEj7euXUTYAAAQIECBAgQIAAgWUIOCcBAgQIEBiYgAbpwC6o6RAgQIAAAQKzEXAUAgQIECBAgAABAgTGIaBBOo7rbJYE1hLwPgECBAgQIECAAAECBAgQIDB8ATNcR0CDdB0cHxEgQIAAAQIECBAgQIBAnwTUSoAAAQIEJhfQIJ3czB4ECBAgQIAAgeUKODsBAgQIECBAgAABAjMT0CCdGaUDESAwawHHI0CAAAECBAgQIECAAAECBIYvsOwZapAu+wo4PwECBAgQIECAAAECBAiMQcAcCRAgQKCjAhqkHb0wyiJAgAABAgQI9FNA1QQIECBAgAABAgT6JaBB2q/rpVoCBLoioA4CBAgQIECAAAECBAgQIEBgEALrNkgHMUOTIECAAAECBAgQIECAAAECBNYV8CEBAgTGLKBBOuarb+4ECBAgQIAAgXEJmC0BAgQIECBAgACBOwhokN6BxBsECBDou4D6CRAgQIAAAQIECBAgQIAAgVaB/jZIW2doHAECBAgQIECAAAECBAgQINBfAZUTIEBgzgIapHMGdngCBAgQIECAAAECLQLGECBAgAABAgQILEdAg3Q57s5KgACBsQqYNwECBAgQIECAAAECBAgQ6JSABulcLoeDEiBAgAABAgQIECBAgAABAsMXMEMCBIYgoEE6hKtoDgQIECBAgAABAgTmKeDYBAgQIECAAIEBC2iQDvjimhoBAgQITCZgNAECBAgQIECAAAECBAiMT0CDdHzX3IwJECBAgAABAgQIECBAgACB4QuYIQECjQIapI1QhhEgQIAAAQIECBAg0EUBNREgQIAAAQIENiegQbo5P3sTIECAAIHFCDgLAQIECBAgQIAAAQIECMxFQIN0LqwOOq2A/QgQIECAAAECBAgQIECAAIHhC5ghgS4JaJB26WqohQABAgQIECBAgACBIQmYCwECBAgQINADAQ3SHlwkJRIgQIAAgW4LqI4AAQIECBAgQIAAAQL9FdAg7e+1U/miBZyPAAECBAgQIECAAAECBAgQGL6AGY5OQIN0dJfchAkQIECAAAECBAgQILCywoAAAQIECBDYKqBButXBvwQIECBAgMAwBcyKAAECBAgQIECAAAEC6wpokK7L40MCfRFQJwECBAgQIECAAAECBAgQIDB8ATOch8D/AwAA///vhnn+AAAABklEQVQDADoKWUuuFIh4AAAAAElFTkSuQmCC"
              width={338}
              height={37.5}
              x={331}
              y={270}
            />
          </switch>
        </g>
        <g
          stroke="#ff0000"
          strokeMiterlimit={10}
          data-cell-id="XGC94LKipElDB2QK_oeb-6"
        >
          <path
            fill="none"
            d="M380 440v52.53"
            pointerEvents="stroke"
            style={{
              stroke: "#ff0000",
            }}
            transform="translate(.5 .5)"
          />
          <path
            d="m380 497.78-3.5-7 3.5 1.75 3.5-1.75Z"
            pointerEvents="all"
            style={{
              fill: "#000",
              stroke: "#ff0000",
            }}
            transform="translate(.5 .5)"
          />
        </g>
        <g
          stroke="#ff0000"
          strokeMiterlimit={10}
          data-cell-id="XGC94LKipElDB2QK_oeb-7"
        >
          <path
            fill="none"
            d="m459.93 440-.12 52.53"
            pointerEvents="stroke"
            style={{
              stroke: "#ff0000",
            }}
            transform="translate(.5 .5)"
          />
          <path
            d="m459.8 497.78-3.48-7.01 3.49 1.76 3.51-1.74Z"
            pointerEvents="all"
            style={{
              fill: "#000",
              stroke: "#ff0000",
            }}
            transform="translate(.5 .5)"
          />
        </g>
        <g
          stroke="#ff0000"
          strokeMiterlimit={10}
          data-cell-id="XGC94LKipElDB2QK_oeb-8"
        >
          <path
            fill="none"
            d="M620 440v52.53"
            pointerEvents="stroke"
            style={{
              stroke: "#ff0000",
            }}
            transform="translate(.5 .5)"
          />
          <path
            d="m620 497.78-3.5-7 3.5 1.75 3.5-1.75Z"
            pointerEvents="all"
            style={{
              fill: "#000",
              stroke: "#ff0000",
            }}
            transform="translate(.5 .5)"
          />
        </g>
        <g
          stroke="#ff0000"
          strokeMiterlimit={10}
          data-cell-id="XGC94LKipElDB2QK_oeb-9"
        >
          <path
            fill="none"
            d="M540 340v152.53"
            pointerEvents="stroke"
            style={{
              stroke: "#ff0000",
            }}
            transform="translate(.5 .5)"
          />
          <path
            d="m540 497.78-3.5-7 3.5 1.75 3.5-1.75Z"
            pointerEvents="all"
            style={{
              fill: "#000",
              stroke: "#ff0000",
            }}
            transform="translate(.5 .5)"
          />
        </g>
        <g
  data-cell-id="XGC94LKipElDB2QK_oeb-11"
  onClick={() => navigateTo("/ht1")}
  style={{ cursor: "pointer" }}
>
          <path fill="none" d="M340 505h60v30h-60z" pointerEvents="all" />
          <switch>
            <foreignObject
              width="100%"
              height="100%"
              pointerEvents="none"
              requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              style={{
                overflow: "visible",
                textAlign: "left",
              }}
            >
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  display: "flex",
                  alignItems: "unsafe flex-start",
                  justifyContent: "unsafe flex-start",
                  width: 58,
                  height: 1,
                  paddingTop: 512,
                  marginLeft: 342,
                }}
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    fontSize: 0,
                    textAlign: "left",
                    color: "#000",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      fontSize: 12,
                      fontFamily: "Helvetica",
                      color: "#000",
                      lineHeight: 1.2,
                      pointerEvents: "all",
                      whiteSpace: "normal",
                      wordWrap: "normal",
                    }}
                  >
                    {"HT 1 OG 1"}
                  </div>
                </div>
              </div>
            </foreignObject>
            <image
              xlinkHref="data:image/png;base64,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"
              width={58}
              height={17}
              x={342}
              y={512.5}
            />
          </switch>
        </g>
        <g
  data-cell-id="XGC94LKipElDB2QK_oeb-11"
  onClick={() => navigateTo("/ht1")}
  style={{ cursor: "pointer" }}
>
          <path fill="none" d="M430 505h60v30h-60z" pointerEvents="all" />
          <switch>
            <foreignObject
              width="100%"
              height="100%"
              pointerEvents="none"
              requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              style={{
                overflow: "visible",
                textAlign: "left",
              }}
            >
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  display: "flex",
                  alignItems: "unsafe flex-start",
                  justifyContent: "unsafe flex-start",
                  width: 58,
                  height: 1,
                  paddingTop: 512,
                  marginLeft: 432,
                }}
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    fontSize: 0,
                    textAlign: "left",
                    color: "#000",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      fontSize: 12,
                      fontFamily: "Helvetica",
                      color: "#000",
                      lineHeight: 1.2,
                      pointerEvents: "all",
                      whiteSpace: "normal",
                      wordWrap: "normal",
                    }}
                  >
                    {"HT 1 OG 2"}
                  </div>
                </div>
              </div>
            </foreignObject>
            <image
              xlinkHref="data:image/png;base64,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"
              width={58}
              height={17}
              x={432}
              y={512.5}
            />
          </switch>
        </g>
        <g
  data-cell-id="XGC94LKipElDB2QK_oeb-13"
  onClick={() => navigateTo("/ht2")}
  style={{ cursor: "pointer" }}
>
          <path fill="none" d="M510 505h70v20h-70z" pointerEvents="all" />
          <switch>
            <foreignObject
              width="100%"
              height="100%"
              pointerEvents="none"
              requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              style={{
                overflow: "visible",
                textAlign: "left",
              }}
            >
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  display: "flex",
                  alignItems: "unsafe flex-start",
                  justifyContent: "unsafe flex-start",
                  width: 68,
                  height: 1,
                  paddingTop: 512,
                  marginLeft: 512,
                }}
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    fontSize: 0,
                    textAlign: "left",
                    color: "#000",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      fontSize: 12,
                      fontFamily: "Helvetica",
                      color: "#000",
                      lineHeight: 1.2,
                      pointerEvents: "all",
                      whiteSpace: "normal",
                      wordWrap: "normal",
                    }}
                  >
                    {"HT 2 OG 1"}
                  </div>
                </div>
              </div>
            </foreignObject>
            <image
              xlinkHref="data:image/png;base64,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"
              width={68}
              height={17}
              x={512}
              y={512.5}
            />
          </switch>
        </g>
       <g
  data-cell-id="XGC94LKipElDB2QK_oeb-14"
  onClick={() => navigateTo("/ht2")}
  style={{ cursor: "pointer" }}
>
          <path fill="none" d="M590 505h60v20h-60z" pointerEvents="all" />
          <switch>
            <foreignObject
              width="100%"
              height="100%"
              pointerEvents="none"
              requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              style={{
                overflow: "visible",
                textAlign: "left",
              }}
            >
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  display: "flex",
                  alignItems: "unsafe flex-start",
                  justifyContent: "unsafe flex-start",
                  width: 58,
                  height: 1,
                  paddingTop: 512,
                  marginLeft: 592,
                }}
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    fontSize: 0,
                    textAlign: "left",
                    color: "#000",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      fontSize: 12,
                      fontFamily: "Helvetica",
                      color: "#000",
                      lineHeight: 1.2,
                      pointerEvents: "all",
                      whiteSpace: "normal",
                      wordWrap: "normal",
                    }}
                  >
                    {"HT 2 OG 2"}
                  </div>
                </div>
              </div>
            </foreignObject>
            <image
              xlinkHref="data:image/png;base64,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"
              width={58}
              height={17}
              x={592}
              y={512.5}
            />
          </switch>
        </g>
        <path
          fill="none"
          stroke="#ff0000"
          strokeMiterlimit={10}
          d="M380 340v40"
          data-cell-id="AbpdrMJhfyFYQB12gEaU-2"
          pointerEvents="stroke"
          style={{
            stroke: "#ff0000",
          }}
          transform="translate(.5 .5)"
        />
        <g data-cell-id="AbpdrMJhfyFYQB12gEaU-1">
          <path
            fill="#fff"
            stroke="#ff0000"
            d="M350 380h60v60h-60z"
            pointerEvents="all"
            style={{
              fill: "#fff",
              stroke: "#ff0000",
            }}
            transform="translate(.5 .5)"
          />
          <switch>
            <foreignObject
              width="100%"
              height="100%"
              pointerEvents="none"
              requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              style={{
                overflow: "visible",
                textAlign: "left",
              }}
            >
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  display: "flex",
                  alignItems: "unsafe center",
                  justifyContent: "unsafe center",
                  width: 58,
                  height: 1,
                  paddingTop: 410,
                  marginLeft: 351,
                }}
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    fontSize: 0,
                    textAlign: "center",
                    color: "#000",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      fontSize: 12,
                      fontFamily: "Helvetica",
                      color: "#000",
                      lineHeight: 1.2,
                      pointerEvents: "all",
                      whiteSpace: "normal",
                      wordWrap: "normal",
                    }}
                  >
                    <img
  src={mfmImage}
  alt="MFM"
  style={{
    width: 62,
    height: 62,
    objectFit: "contain",
    display: "block",
    margin: "-4px auto",
    position: "relative",
    zIndex: 10,
  }}
/>
                  </div>
                </div>
              </div>
            </foreignObject>
            <image
              xlinkHref="data:image/png;base64,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"
              width={58}
              height={17}
              x={351}
              y={403.5}
            />
          </switch>
        </g>
        <path
          fill="none"
          stroke="#ff0000"
          strokeMiterlimit={10}
          d="m459.8 340 .11 40"
          data-cell-id="AbpdrMJhfyFYQB12gEaU-4"
          pointerEvents="stroke"
          style={{
            stroke: "#ff0000",
          }}
          transform="translate(.5 .5)"
        />
        <g data-cell-id="AbpdrMJhfyFYQB12gEaU-3">
          <path
            fill="#fff"
            stroke="#ff0000"
            d="M430 380h60v60h-60z"
            pointerEvents="all"
            style={{
              fill: "#fff",
              stroke: "#ff0000",
            }}
            transform="translate(.5 .5)"
          />
          <switch>
            <foreignObject
              width="100%"
              height="100%"
              pointerEvents="none"
              requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              style={{
                overflow: "visible",
                textAlign: "left",
              }}
            >
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  display: "flex",
                  alignItems: "unsafe center",
                  justifyContent: "unsafe center",
                  width: 58,
                  height: 1,
                  paddingTop: 410,
                  marginLeft: 431,
                }}
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    fontSize: 0,
                    textAlign: "center",
                    color: "#000",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      fontSize: 12,
                      fontFamily: "Helvetica",
                      color: "#000",
                      lineHeight: 1.2,
                      pointerEvents: "all",
                      whiteSpace: "normal",
                      wordWrap: "normal",
                    }}
                  >
                   <img
  src={mfmImage}
  alt="MFM"
  style={{
    width: 62,
    height: 62,
    objectFit: "contain",
    display: "block",
    margin: "-4px auto",
    position: "relative",
    zIndex: 10,
  }}
/>
                  </div>
                </div>
              </div>
            </foreignObject>
            <image
              xlinkHref="data:image/png;base64,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"
              width={58}
              height={17}
              x={431}
              y={403.5}
            />
          </switch>
        </g>
        <g data-cell-id="AbpdrMJhfyFYQB12gEaU-5">
          <path
            fill="#fff"
            stroke="#ff0000"
            d="M515 380h60v60h-60z"
            pointerEvents="all"
            style={{
              fill: "#fff",
              stroke: "#ff0000",
            }}
            transform="translate(.5 .5)"
          />
          <switch>
            <foreignObject
              width="100%"
              height="100%"
              pointerEvents="none"
              requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              style={{
                overflow: "visible",
                textAlign: "left",
              }}
            >
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  display: "flex",
                  alignItems: "unsafe center",
                  justifyContent: "unsafe center",
                  width: 58,
                  height: 1,
                  paddingTop: 410,
                  marginLeft: 516,
                }}
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    fontSize: 0,
                    textAlign: "center",
                    color: "#000",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      fontSize: 12,
                      fontFamily: "Helvetica",
                      color: "#000",
                      lineHeight: 1.2,
                      pointerEvents: "all",
                      whiteSpace: "normal",
                      wordWrap: "normal",
                    }}
                  >
                   <img
  src={mfmImage}
  alt="MFM"
  style={{
    width: 62,
    height: 62,
    objectFit: "contain",
    display: "block",
    margin: "-4px auto",
    position: "relative",
    zIndex: 10,
  }}
/>
                  </div>
                </div>
              </div>
            </foreignObject>
            <image
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOgAAABECAYAAACLd3ntAAAHJUlEQVR4AeydW8t1UxTHN8kFF5IUOeaSFCEkpZRTJJ/Ax3Dr1idxoyTJISISciwhN+TMFcqhpBi/3RrPM8x37j3nOmxr7bn+b3M8Y57WXHP+5h7t/157r/WevdE/ERCBxRJQgC52azQxEdhsFKB6FYjAggkoQBe8OZqaCChA53sN6MwiUCSgAC0iUgcRmI+AAnQ+9jqzCBQJKECLiNRBBOYjoACdj73OPB+BozmzAnSzucl263ezfzL2pNWdYzZFutAGedcsd56vrP5Ss13pMWvIHTdV3UM2fkzMhTnlxn/bOl5gNkWC7VM2UO487Al7Y83rTQrQ/Xt/pzVfYTZFus4GucHs2NONtoBrzaZIV9ogd5gp7SCgAN0Bpqu+zPytZlOk+20Q3jHMHXU612Z/r9kU6XYb5BIzpR0EFKA7wITqhy0/NrCQt/fYOK2k+2whY2UuTB+xcZT2EGgwQPesdljTFDJ3ann7hy3lZrOzJrJnbZw+aQqZK3lbQVwBmofEBQpvmULmtiBvI5MpZK7krb/C9ngFaB4OV2+5suitY2RuKm959/vGBz4i/5zN9RczT2Nkbk7efuwDy58SUICesog5vg75PFSMkbmpvGXsD8LYx5L9zCb6jpmnMTI3lbd8pfO6Dyx/SkABesoi5n60At/3mdumMTI3lbfP24i/mh1b+tMm/KqZp4zM9aaiT+Ut435bPGqFHRSg+U1H3j6dNA2RuTl5+3Iy7jEVmTsS3ec8RObm5C2sYe7jyncEFKAdiIx73+qQXua2aYjMzcnbKJ23Ax/RH+aORPcpD5G5OXkLax9TPhBQgAYYSfZ7KyO9zG3TEJmbk7e/bUc7zj/MHYnusx8ic3PyFtY+pnwgoAANMJIskgvpFav7yNzW5K1zGCNzJW+dYqWvD9DKARvrhvQaKnNbk7e+tWNkruStU6z0CtD9oJBeQ2Vua/LWSY2RuZK3TrHSK0D3gxoqcw8tb8+zab9nxvyGGsqA28psmN5piMyVvO2NeaPHblYwGyJzW5W3jmuIzJW8dXo9vN5By7B+si5vmXmquZo7rbz1My/HI3NfC9OpuZoreRuA1WYVoGVSf1uXZ8xi2nc199DyNs5jzvyLdvK/zDzt+9GC5K1T6ukVoHXA+A3qd6HrXZZHspk7I/0f8pZf84y93ewqm/kPZkPTp3bgh2aeeDzJ9V5IPKzikxP4/MtHh6SbiikBBWhKJF/m7pM3QhNPAUCyhaqTbCpvkYJIwpMOjWT4PfELYS28S7L2UHWShRXMvIKPDHx08LL8DgIK0B1gkuqczOVpALwoY9dU3iIBkYKxT0t51sYafU08NQIGXsbDCFbk3fjIAFMvL9fPPDMFaP0GpDIXyYZ0iyOk8hYJiBSMfVrKszbW6GvioWgw8DIeRrAij/FRAZbkZQUCCtACoNBcI3OReLxj+GFIQKSgl1vzrI01+rpYOwy8jE/lLR8VYEmbrEBAAVoAFJqRZEizULVBuvGipI6HaN1NpjOkHxKwKzbrWCNr9QVGmQubB72h8zCEZVeU20dAAbqPzpltSDMkmrcg3ZBwlHlWLLdfkceQfkhA8i0ba2StvsYoc3mmMLfpeRvsYOhl+QKBVQdogU2uGWkWn7TAlUkkHH15Vixf2JPHkH5IQPItG2t8JSyQd02XuTxTmB92eLPkrZOo9ArQSlBdN6RZegsaMvcia+eLenPbhORD+m0LK/jDPaKw8aUicy+2Aj/oMHeSJG9PUNRlFKB1nGIvvsPjmUVeh8x9wAprlLe27G36xP5+ZOYJmQsTyVsnMtArQPuD+9oOedPMEzL3cSusUd7asrfpZ/v7kpknZC5MJG+dyECvAO0PDimXytxrwjBrk7e+9FTmXu0Nnf+PvO3q5AoEFKAFQDuaU5kbu3FFkyubsW4N+VTmxjXr6m2k0SOvAO0BK3RNZW5o2qzl6m1cM/lU5lLnpqu3TqKnV4D2BNZ1z8lcmtYqb1k7lspc6jDJWygMMAXoAGjdITmZu1Z52yHZ5GSu5K3TGeAPEaADpjHrIdyXeL7N4KxgNf8d3xfWn2f6xONuszq+uDe3Nz1qrfG40r2ZTyT9mS/ztuqDJO4TZU5xjsyhdDJk7i3WKR53uZW/NCslxo/HHXqNpfksol0Buoht0CREIE9AAZrnoloRWAQBBegitkGTEIE8AQVonsux1mrejRFQgDa2oVpOWwQUoG3tp1bTGAEFaGMbquW0RUAB2tZ+ajXzETjImRWgB8GqQUVgGgIK0Gk4ahQROAgBBehBsGpQEZiGgAJ0Go4aRQQOQkABWoVVnURgHgIK0Hm466wiUEVAAVqFSZ1EYB4CCtB5uOusIlBFQAFahUmd5iOw7jMrQNe9/1r9wgkoQBe+QZreugkoQNe9/1r9wgkoQBe+QZreugnMG6DrZq/Vi0CRgAK0iEgdRGA+Av8CAAD//2OFx4MAAAAGSURBVAMAKbg9mDQpd7oAAAAASUVORK5CYII="
              width={58}
              height={17}
              x={516}
              y={403.5}
            />
          </switch>
        </g>
        <path
          fill="none"
          stroke="#ff0000"
          strokeMiterlimit={10}
          d="M620 340v40"
          data-cell-id="AbpdrMJhfyFYQB12gEaU-7"
          pointerEvents="stroke"
          style={{
            stroke: "#ff0000",
          }}
          transform="translate(.5 .5)"
        />
        <g data-cell-id="AbpdrMJhfyFYQB12gEaU-6">
          <path
            fill="#fff"
            stroke="#ff0000"
            d="M590 380h60v60h-60z"
            pointerEvents="all"
            style={{
              fill: "#fff",
              stroke: "#ff0000",
            }}
            transform="translate(.5 .5)"
          />
          <switch>
            <foreignObject
              width="100%"
              height="100%"
              pointerEvents="none"
              requiredFeatures="http://www.w3.org/TR/SVG11/feature#Extensibility"
              style={{
                overflow: "visible",
                textAlign: "left",
              }}
            >
              <div
                xmlns="http://www.w3.org/1999/xhtml"
                style={{
                  display: "flex",
                  alignItems: "unsafe center",
                  justifyContent: "unsafe center",
                  width: 58,
                  height: 1,
                  paddingTop: 410,
                  marginLeft: 591,
                }}
              >
                <div
                  style={{
                    boxSizing: "border-box",
                    fontSize: 0,
                    textAlign: "center",
                    color: "#000",
                  }}
                >
                  <div
                    style={{
                      display: "inline-block",
                      fontSize: 12,
                      fontFamily: "Helvetica",
                      color: "#000",
                      lineHeight: 1.2,
                      pointerEvents: "all",
                      whiteSpace: "normal",
                      wordWrap: "normal",
                    }}
                  >
                   <img
  src={mfmImage}
  alt="MFM"
  style={{
    width: 62,
    height: 62,
    objectFit: "contain",
    display: "block",
    margin: "-4px auto",
    position: "relative",
    zIndex: 10,
  }}
/>
                  </div>
                </div>
              </div>
            </foreignObject>
            <image
              xlinkHref="data:image/png;base64,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"
              width={58}
              height={17}
              x={591}
              y={403.5}
            />
          </switch>
        </g>
      </g>
    </g>
  </svg>
)
export default SvgComponent
