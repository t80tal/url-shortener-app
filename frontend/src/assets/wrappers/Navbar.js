import styled from 'styled-components'

const Wrapper = styled.nav`
  background: linear-gradient(90deg, rgb(110, 94, 254), rgba(73, 63, 252, 1) 100%);
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2rem;

  .navbar-logo {
    color: #fff;
    justify-self: start;
    margin-left: 20px;
    cursor: pointer;
  }

  .navbar-collapse-icon {
    cursor: pointer;
  }

  .navbar-collapse-svg {
    display: none;
    color: white;
  }

  .navbar-btn {
    padding: 8px 20px;
    border-radius: 4px;
    outline: none;
    background-color: #3acbf7;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 15px;
    transition: all 0.3s ease-out;
  }

  .navbar-btn:hover {
    background-color: #fff;
    transition: all 0.3s ease-out;
    color: #6568f4;
  }

  .navbar-menu {
    display: grid;
    grid-template-columns: repeat(5, auto);
    grid-gap: 10px;
    list-style: none;
    text-align: center;
    width: 70vw;
    justify-content: end;
    margin-right: 2rem;
  }

  .navbar-mobile-btn {
    display: none;
    text-decoration: none;
  }

  .navbar-dekstop-btn {
    color: white;
    text-decoration: none;
    padding: 0.5rem 1rem;
  }

  .navbar-dekstop-btn:hover {
    background-color: #6d76f7;
    border-radius: 4px;
    transition: all 0.2s ease-out;
  }

  @media screen and (max-width: 995px) {
    position: relative;

    .navbar-btn {
      display: none;
    }

    .navbar-menu {
      display: flex;
      flex-direction: column;
      width: 100%;
      height: 531px;
      position: absolute;
      top: 70px;
      left: -100%;
      opacity: 1;
    }

    .navbar-menu-active {
      background: #6668f4;
      left: 0;
      opacity: 1;
      transition: all 0.5s ease;
      z-index: 1;
    }

    .navbar-dekstop-btn {
      text-align: center;
      padding: 2rem;
      display: table;
      transition: all 0.2s ease-out;
    }

    .navbar-dekstop-btn:hover {
      background-color: #7f77fa;
      border-radius: 0;
      transition: all 0.3s ease-out;
    }

    .navbar-logo {
      position: absolute;
      top: 0;
      left: 0;
      transform: translate(25%, 50%);
    }

    .navbar-collapse-svg {
      display: block;
      position: absolute;
      margin-top: 8px;
      top: 0;
      right: 0;
      transform: translate(-100%, 60%);
      font-size: 1.8rem;
      cursor: pointer;
      transition: all 0.2s ease-out;
    }

    .navbar-collapse-svg:hover {
      -webkit-filter: drop-shadow( 0 0 1px rgba(255, 255, 255, 1));
      transition: all 0.2s ease-out;
    }

    .navbar-mobile-btn {
      display: block;
      text-align: center;
      padding: 1.5rem;
      margin: 2rem auto;
      border-radius: 4px;
      width: 80%;
      background: #4ad9e4;
      color: #fff;
      text-decoration: none;
      font-size: 1.5rem;
      transition: all 0.2s ease-out;
    }
    .navbar-mobile-btn:hover {
      background: #fff;
      color: #6568f4;
      transition: all 0.2s ease-out;
    }
  }
`

export default Wrapper