import React from 'react'

class notes extends React.Component{
  static defaultProps = {notes:[]}
  state = {
    currentNotesIndex:0
  }

  renderContent() {
    const currentFolder = this.props.folders[this.state.currentFoldersIndex];
    return <div className="content">{currentFolder.name.content}</div>;
  }
  render(){
    return (
      <div className='notes'>
      <p>{this.renderContent}</p>

      </div>
    )
  }
}

export default notes