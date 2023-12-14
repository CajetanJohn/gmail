import React from 'react';
import useEmailSearch from '../../Utils/Hooks/Search';

const EmailSearchForm = ({ onSearch }) => {
  const { searchParams, setSearchParams, searchEmails } = useEmailSearch();

  const handleInputChange = (field, value) => {
    setSearchParams(prevParams => ({
      ...prevParams,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const results = searchEmails();
    onSearch(results);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="from">From:</label>
        <input type="text" id="from" value={searchParams.from} onChange={(e) => handleInputChange('from', e.target.value)} />
      </div>

      <div>
        <label htmlFor="to">To: </label>
        <input type="text" id="to" value={searchParams.to} onChange={(e)=>{handleInputChange('to', e.target.value)}}/>
      </div>

      <div>
        <label htmlFor="subject">Subject: </label>
        <input type="text" id="subject" value={searchParams.subject} onChange={(e)=>{handleInputChange('subject', e.target.value)}}/>
      </div>

      <div>
        <label htmlFor="includes">Includes the words</label>
        <input type="text" id="includes" value={searchParams.includes} onChange={(e)=>{handleInputChange('includes', e.target.value)}}/>
      </div>

      <div>
        <label htmlFor="excludes">Doesn't have</label>
        <input type="text" id="excludes" value={searchParams.excludes} onChange={(e)=>{handleInputChange('excludes', e.target.value)}}/>
      </div>
      
      <div>
        <label htmlFor="mailbox">Search in</label>
        <select id="mailbox" value={searchParams.mailbox} onChange={(e) => handleInputChange('mailbox', e.target.value)} >
          <option value="">Any Mailbox</option>
          <option value="inbox">Inbox</option>
          <option value="sent">Sent</option>
          <option value="drafts">Drafts</option>
          <option value="spam">Spam</option>
          <option value="bin">Bin</option>
        </select>
      </div>


      <div>
        <label htmlFor="sizeComparison">Size</label>
        <select
          id="sizeComparison"
          value={searchParams.size.comparison}
          onChange={(e) => handleSizeChange("comparison", e.target.value)}
        >
          <option value="">Any Size</option>
          <option value="greater">Greater Than</option>
          <option value="less">Less Than</option>
        </select>
        <input
          type="number"
          value={searchParams.size.value}
          onChange={(e) => handleSizeChange("value", e.target.value)}
        />
        <select
          value={searchParams.size.unit}
          onChange={(e) => handleSizeChange("unit", e.target.value)}
        >
          <option value="">Any Unit</option>
          <option value="MB">MB</option>
          <option value="KB">KB</option>
          <option value="Bytes">Bytes</option>
        </select>
      </div>
      

      

      <div>
        <label>
          <input type="checkbox" checked={searchParams.hasAttachment} onChange={(e) => handleInputChange('hasAttachment', e.target.checked)}/>
          Has Attachment
        </label>
      </div>

      <div>
        <label>
          <input type="checkbox" checked={searchParams.includesChats} onChange={(e) => handleInputChange('includesChats', e.target.checked)}
          /> Includes Chats
        </label>
      </div>

      
      <div>
        <button type="submit">Search</button>
      </div>
    </form>
  );
};

export default EmailSearchForm;
