import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {Homepage} from './Homepage'
import '../Assets/Style/loading.css';

const LoadingComponent = () => {
  const navigate = useNavigate();
  const [animationTime, setAnimationTime] = useState(2); // Set the animation time in seconds

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      // Redirect to another component after the animation time
      navigate('/home');
    }, (animationTime + 1) * 1000); // Add 1 second buffer for safety

    return () => clearTimeout(timeoutId); // Cleanup the timeout on component unmount

  }, [animationTime]);

  return (
    <div id="loading">
      <div style={{ bottom: 0, left: 0, overflow: 'hidden', position: 'absolute', right: 0, top: 0 }}>
        <div
          style={{
            animation: `a-h .5s ${animationTime}s 1 linear forwards, a-nt .6s ${animationTime}s 1 cubic-bezier(0,0,.2,1)`,
            background: '#eee',
            borderRadius: '50%',
            height: '800px',
            left: '50%',
            margin: '-448px -400px 0',
            position: 'absolute',
            top: '50%',
            transform: 'scale(0)',
            width: '800px',
          }}
        ></div>
      </div>
      <div style={{ height: '100%', textAlign: 'center' }}>
        <div style={{ height: '50%', margin: '0 0 -140px' }}></div>
        <div style={{ height: '128px', margin: '0 auto', position: 'relative', width: '176px' }}>
          <div
            style={{
              animation: 'a-s .5s .5s 1 linear forwards, a-e 1.75s .5s 1 cubic-bezier(0,0,.67,1) forwards',
              opacity: 0,
              transform: 'scale(.68)'
            }}
          >
            <div
              style={{
                background: '#ddd',
                borderRadius: '12px',
                boxShadow: '0 15px 15px -15px rgba(0,0,0,.3)',
                height: '128px',
                left: 0,
                overflow: 'hidden',
                position: 'absolute',
                top: 0,
                transform: 'scale(1)',
                width: '176px'
              }}
            >
              <div
                style={{
                  animation: 'a-nt .667s 1.5s 1 cubic-bezier(.4,0,.2,1) forwards',
                  background: '#d23f31',
                  borderRadius: '50%',
                  height: '270px',
                  left: '88px',
                  margin: '-135px',
                  position: 'absolute',
                  top: '25px',
                  transform: 'scale(.5)',
                  width: '270px'
                }}
              ></div>
              <div
                style={{
                  height: '128px',
                  left: '20px',
                  overflow: 'hidden',
                  position: 'absolute',
                  top: 0,
                  transform: 'scale(1)',
                  width: '136px'
                }}
              >
                <div
                  style={{
                    background: '#e1e1e1',
                    height: '128px',
                    left: 0,
                    position: 'absolute',
                    top: 0,
                    width: '68px'
                  }}
                >
                  <div
                    style={{
                      animation: 'a-h .25s 1.25s 1 forwards',
                      background: '#eee',
                      height: '128px',
                      left: 0,
                      opacity: 1,
                      position: 'absolute',
                      top: 0,
                      width: '68px'
                    }}
                  ></div>
                </div>
                <div
                  style={{
                    background: '#eee',
                    height: '100px',
                    left: '1px',
                    position: 'absolute',
                    top: '56px',
                    transform: 'scaleY(.73)rotate(135deg)',
                    width: '200px'
                  }}
                ></div>
              </div>
              <div
                style={{
                  background: '#bbb',
                  height: '176px',
                  left: 0,
                  position: 'absolute',
                  top: '-100px',
                  transform: 'scaleY(.73)rotate(135deg)',
                  width: '176px'
                }}
              >
                <div
                  style={{
                    background: '#eee',
                    borderRadius: '12px 12px 0 0',
                    bottom: '117px',
                    height: '12px',
                    left: '55px',
                    position: 'absolute',
                    transform: 'rotate(-135deg)scaleY(1.37)',
                    width: '136px'
                  }}
                ></div>
                <div
                  style={{
                    background: '#eee',
                    height: '96px',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: '96px'
                  }}
                ></div>
                <div
                  style={{
                    boxShadow: 'inset 0 0 10px #888',
                    height: '155px',
                    position: 'absolute',
                    right: 0,
                    top: 0,
                    width: '155px'
                  }}
                ></div>
              </div>
              <div
                style={{
                  animation: 'a-s .167s 1.283s 1 linear forwards, a-es 1.184s 1.283s 1 cubic-bezier(.4,0,.2,1) forwards',
                  background: 'linear-gradient(0,rgba(38,38,38,0),rgba(38,38,38,.2))',
                  height: '225px',
                  left: 0,
                  opacity: 0,
                  position: 'absolute',
                  top: 0,
                  transform: 'rotate(-43deg)',
                  transformOrigin: '0 13px',
                  width: '176px'
                }}
              ></div>
            </div>
            <div
              style={{
                animation: 'a-ef 1.184s 1.283s 1 cubic-bezier(.4,0,.2,1) forwards',
                borderRadius: '12px',
                height: '100px',
                left: 0,
                overflow: 'hidden',
                position: 'absolute',
                top: 0,
                transform: 'scaleY(1)',
                transformOrigin: 'top',
                width: '176px'
              }}
            >
              <div
                style={{
                  height: '176px',
                  left: 0,
                  position: 'absolute',
                  top: '-100px',
                  transform: 'scaleY(.73)rotate(135deg)',
                  width: '176px'
                }}
              >
                <div
                  style={{
                    animation: 'a-s .167s 1.283s 1 linear forwards',
                    boxShadow: '-5px 0 12px rgba(0,0,0,.5)',
                    height: '176px',
                    left: 0,
                    opacity: 0,
                    position: 'absolute',
                    top: 0,
                    width: '176px'
                  }}
                ></div>
                <div
                  style={{
                    background: '#ddd',
                    height: '176px',
                    left: 0,
                    overflow: 'hidden',
                    position: 'absolute',
                    top: 0,
                    width: '176px'
                  }}
                >
                  <div
                    style={{
                      animation: 'a-nt .667s 1.25s 1 cubic-bezier(.4,0,.2,1) forwards',
                      background: '#db4437',
                      borderRadius: '50%',
                      bottom: '41px',
                      height: '225px',
                      left: '41px',
                      position: 'absolute',
                      transform: 'scale(0)',
                      width: '225px'
                    }}
                  ></div>
                  <div
                    style={{
                      background: '#f1f1f1',
                      height: '128px',
                      left: '24px',
                      position: 'absolute',
                      top: '24px',
                      transform: 'rotate(90deg)',
                      width: '128px'
                    }}
                  ></div>
                  <div
                    style={{
                      animation: 'a-efs 1.184s 1.283s 1 cubic-bezier(.4,0,.2,1) forwards',
                      background: '#fff',
                      height: '176px',
                      opacity: 0,
                      transform: 'rotate(90deg)',
                      width: '176px'
                    }}
                  ></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="nlpt"></div>
        <div style={{ animation: `a-s .25s ${animationTime}s 1 forwards`, opacity: 0 }} className="msg">
          Loading Gmail&hellip;
        </div>
      </div>
    </div>
  );
};

export default LoadingComponent;
