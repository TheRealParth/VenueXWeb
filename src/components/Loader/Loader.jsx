import React from 'react';

class Loader extends React.Component {
  render() {
    if (!this.props.config.loaded || this.props.auth.loggingIn)
      return (
        <>
          <div className="loader-container">
            <div className="lds-ellipsis">
              <div />
              <div />
              <div />
              <div />
            </div>
            <style>{`
            .loader-container {
position: fixed;
    z-index: 5000000;
    height: 100%;
    width: 100%;
    background-color: white;
    top: 0;
    left: 0;
            }
        .lds-ellipsis {
             display: flex;
    position: absolute;
    top: 45%;
    left: 45%;
        }
        .lds-ellipsis div {
          position: absolute;
          top: 27px;
          width: 11px;
          height: 11px;
          border-radius: 50%;
          background: #000;
          animation-timing-function: cubic-bezier(0, 1, 1, 0);
        }
        .lds-ellipsis div:nth-child(1) {
          left: 6px;
          animation: lds-ellipsis1 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(2) {
          left: 6px;
          animation: lds-ellipsis2 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(3) {
          left: 26px;
          animation: lds-ellipsis2 0.6s infinite;
        }
        .lds-ellipsis div:nth-child(4) {
          left: 45px;
          animation: lds-ellipsis3 0.6s infinite;
        }
        @keyframes lds-ellipsis1 {
          0% {
            transform: scale(0);
          }
          100% {
            transform: scale(1);
          }
        }
        @keyframes lds-ellipsis3 {
          0% {
            transform: scale(1);
          }
          100% {
            transform: scale(0);
          }
        }
        @keyframes lds-ellipsis2 {
          0% {
            transform: translate(0, 0);
          }
          100% {
            transform: translate(19px, 0);
          }
        }`}</style>
          </div>
        </>

      );
    return null;
  }
}

export { Loader };
