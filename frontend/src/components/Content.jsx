/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import '../styles/Content.css'; // For responsive styling

const Content = () => {
  // Sample content data
  const [contentList, setContentList] = useState([
    { id: 1, title: 'Post One', description: 'Description of post one' },
    { id: 2, title: 'Post Two', description: 'Description of post two' },
  ]);

  const [formState, setFormState] = useState({ id: null, title: '', description: '' });
  const [isEditing, setIsEditing] = useState(false);

  // Handle form change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  // Handle add new content
  const handleAddContent = (e) => {
    e.preventDefault();
    const newContent = { ...formState, id: Date.now() };
    setContentList([...contentList, newContent]);
    setFormState({ id: null, title: '', description: '' });
  };

  // Handle edit content
  const handleEditContent = (id) => {
    const contentToEdit = contentList.find((content) => content.id === id);
    setFormState(contentToEdit);
    setIsEditing(true);
  };

  // Handle update content
  const handleUpdateContent = (e) => {
    e.preventDefault();
    const updatedContentList = contentList.map((content) =>
      content.id === formState.id ? formState : content
    );
    setContentList(updatedContentList);
    setIsEditing(false);
    setFormState({ id: null, title: '', description: '' });
  };

  // Handle delete content
  const handleDeleteContent = (id) => {
    const updatedContentList = contentList.filter((content) => content.id !== id);
    setContentList(updatedContentList);
  };

  return (
    <div className="content-management">
      <h2>Content Management</h2>

      {/* Form for adding or editing content */}
      <form onSubmit={isEditing ? handleUpdateContent : handleAddContent}>
        <div>
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={formState.title}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            name="description"
            value={formState.description}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit">{isEditing ? 'Update Content' : 'Add Content'}</button>
      </form>

      {/* Display content list */}
      <div className="content-list">
        {contentList.length > 0 ? (
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {contentList.map((content) => (
                <tr key={content.id}>
                  <td>{content.title}</td>
                  <td>{content.description}</td>
                  <td>
                    <button onClick={() => handleEditContent(content.id)}>Edit</button>
                    <button onClick={() => handleDeleteContent(content.id)}>Delete</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        ) : (
          <p>No content available. Please add some content.</p>
        )}
      </div>
    </div>
  );
};

export default Content;
