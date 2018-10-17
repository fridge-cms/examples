import { withFridge } from 'fridge-next';

const states = {
  initial: 'INITIAL',
  pending: 'PENDING',
  success: 'SUCCESS',
  failure: 'FAILURE'
};

class Page extends React.Component {
  state = {
    form: states.initial
  }

  onSubmit = async (e) => {
    e.preventDefault();
    const { fridge } = this.props;
    this.setState({ form: states.pending });

    try {
      await fridge.post('public/contact_form', {
        active: 1,
        name: e.target.name.value,
        message: e.target.message.value
      });
      this.setState({ form: states.success });
    } catch (err) {
      console.log(err);
      this.setState({ form: states.failure });
    }
  }

  render() {
    const { form } = this.state;

    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <div>
            <input type="text" name="name" placeholder="Name" required />
          </div>
          <div>
            <textarea name="message" placeholder="Message" required />
          </div>
          {form === states.pending && <p>Loading...</p>}
          {form === states.success && <p>Message Sent!</p>}
          {form === states.failure && <p>Failed to send</p>}
          <button disabled={form === states.pending || form === states.success}>Send</button>
        </form>
      </div>
    );
  }
}

export default withFridge()(Page);
