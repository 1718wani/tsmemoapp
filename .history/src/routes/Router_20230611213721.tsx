export function Router() {
    return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/login" element={<LogIn />} />
          <Route exact path="/signup" element={<SignUp />} />
          <Route exact path="/profile" element={<Profile />} />
          <Route exact path="/new" element={<NewBook />} />
          <Route exact path="/detail/:bookId" element={<ReadDetail />} />
          <Route exact path="/edit/:bookId" element={<EditDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    );
  }