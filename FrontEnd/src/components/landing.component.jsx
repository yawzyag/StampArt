import React, { Component } from 'react';

class LandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hover: false
    };
  }

  toggleHover = async () => {
    await this.setState({ hover: !this.state.hover });
  };
  render() {
    let linkStyle;
    if (this.state.hover) {
      linkStyle = { color: '#ed1212', cursor: 'pointer' };
    } else {
      linkStyle = { color: '#000' };
    }
    return (
      <div>
        <header
          class='py-5 bg-image-full'
          style={{
            backgroundImage: "url('https://unsplash.it/1900/1080?image=1076')",
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div className='h-100'>
            <div
              className='mt-2 cajita'
              onMouseEnter={this.toggleHover}
              onMouseLeave={this.toggleHover}
            ></div>
          </div>
        </header>

        <section className='py-5'>
          <div className='container'>
            <h1>Section Heading</h1>
            <p className='lead'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              suscipit, rerum quos facilis repellat architecto commodi officia
              atque nemo facere eum non illo voluptatem quae delectus odit vel
              itaque amet.
            </p>
          </div>
        </section>

        <section
          className='py-5 bg-image-full'
          style={{
            backgroundImage: "url('https://unsplash.it/1900/1080?image=1081')",
            backgroundPosition: 'center',
            backgroundAttachment: 'fixed'
          }}
        >
          <div style={{ height: '200px' }}></div>
        </section>

        <section className='py-5'>
          <div className='container'>
            <h1>Section Heading</h1>
            <p className='lead'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid,
              suscipit, rerum quos facilis repellat architecto commodi officia
              atque nemo facere eum non illo voluptatem quae delectus odit vel
              itaque amet.
            </p>
          </div>
        </section>
      </div>
    );
  }
}

export default LandingPage;
