import { useState } from 'react';
import { EmailData } from '../Data/DataFetch';

const useEmailSearch = () => {
  const [searchParams, setSearchParams] = useState({
    from: '',
    to: '',
    subject: '',
    includes: '',
    excludes: '',
    size: {
      comparison: '', // 'greater', 'less', 'specific'
      value: '',
      unit: '', // 'MB', 'KB', 'Bytes'
    },
    dateWithin: {
      option: '', // '1day', '3days', '1week', '2weeks', '1month', '2months', '6months', '1year', 'custom'
      customDate: null, // Date object for custom date
    },
  });

  const searchEmails = () => {
    const filteredEmails = EmailData.filter(email => {
      const withinDateRange = checkDateWithin(email.timestamp, searchParams.dateWithin);

      return (
        checkTextMatch(email.sender, searchParams.from) &&
        checkTextMatch(email.recipient, searchParams.to) &&
        checkTextMatch(email.subject, searchParams.subject) &&
        checkTextMatch(email.body, searchParams.includes) &&
        checkTextNotMatch(email.body, searchParams.excludes) &&
        checkSize(email.size, searchParams.size) &&
        withinDateRange
      );
    });

    return filteredEmails;
  };

  const checkTextMatch = (text, query) => {
    return query === '' || text.toLowerCase().includes(query.toLowerCase());
  };

  const checkTextNotMatch = (text, query) => {
    return query === '' || !text.toLowerCase().includes(query.toLowerCase());
  };

  const checkSize = (emailSize, searchSize) => {
    if (searchSize.comparison === 'greater') {
      return emailSize > searchSize.value;
    } else if (searchSize.comparison === 'less') {
      return emailSize < searchSize.value;
    } else if (searchSize.comparison === 'specific') {
      return emailSize === searchSize.value;
    }
    return true;
  };

  const checkDateWithin = (emailTimestamp, dateWithin) => {
    const currentDate = new Date();
    const emailDate = new Date(emailTimestamp);

    switch (dateWithin.option) {
      case '1day':
        return currentDate - emailDate <= 1 * 24 * 60 * 60 * 1000;
      case '3days':
        return currentDate - emailDate <= 3 * 24 * 60 * 60 * 1000;
      case '1week':
        return currentDate - emailDate <= 7 * 24 * 60 * 60 * 1000;
      case '2weeks':
        return currentDate - emailDate <= 14 * 24 * 60 * 60 * 1000;
      case '1month':
        return currentDate - emailDate <= 30 * 24 * 60 * 60 * 1000;
      case '2months':
        return currentDate - emailDate <= 60 * 24 * 60 * 60 * 1000;
      case '6months':
        return currentDate - emailDate <= 6 * 30 * 24 * 60 * 60 * 1000;
      case '1year':
        return currentDate - emailDate <= 365 * 24 * 60 * 60 * 1000;
      case 'custom':
        return emailDate >= dateWithin.customDate;
      default:
        return true;
    }
  };

  return {
    searchParams,
    setSearchParams,
    searchEmails,
  };
};

export default useEmailSearch;
