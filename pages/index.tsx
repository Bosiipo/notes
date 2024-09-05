import type { NextPage } from "next";
import Head from "next/head";
import NavBar from "./NavBar";
import CreateArea from "./CreateArea";
import { useEffect, useState } from "react";
import Note from "./Note";
import dotenv from "dotenv";
dotenv.config();

type Note = {
  _id: string;
  title: string;
  content: string;
};

const Home: NextPage = () => {
  const [notes, setNotes] = useState<Note[]>([]);
  const baseUrl = process.env.NEXT_PUBLIC_SERVER_URL;

  const callNotes = async () => {
    try {
      let res = await fetch(baseUrl || "")
        .then((res) => res.json())
        .then((response) => {
          console.log({ response });
          if (response.status) {
            setNotes(response.data);
          }
        })
        .catch((e) => console.log({ e }));
    } catch (error) {
      console.log({ error });
    }
  };

  useEffect(() => {
    callNotes();
  }, []);

  const addNote = async (newNote: any) => {
    try {
      await fetch(baseUrl || "", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newNote),
      })
        .then((res) => res.json())
        .then((response) => {
          if (response.status) {
            setNotes((preNotes) => {
              return [...preNotes, response.data];
            });
          }
        })
        .catch((e) => console.log({ e }));
    } catch (error) {
      console.log({ error });
    }
  };
  const deleteNote = async (id: any) => {
    await fetch(`${baseUrl}/${id._id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((response) => {
        if (response.status) {
          setNotes((preNotes) => {
            return preNotes.filter((noteItem, index) => {
              return noteItem._id !== id;
            });
          });
          callNotes();
        }
      })
      .catch((e) => console.log({ e }));
  };

  return (
    <div>
      <Head>
        <title>Notes</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <NavBar text="Notes" />
      <CreateArea onAdd={addNote} />

      {notes.map((noteItem: any, index) => {
        return (
          <Note
            key={index}
            id={noteItem}
            title={noteItem.title}
            content={noteItem.content}
            onDelete={deleteNote}
          />
        );
      })}
    </div>
  );
};

export default Home;
